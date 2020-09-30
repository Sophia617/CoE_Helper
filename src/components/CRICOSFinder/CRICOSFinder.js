import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import jsonData from '../../data/coursesWithCRICOS';
import Wrapper from './CRICOSFinder.styles'
import Search from './Search';
import CourseList from './CourseList';
import PaginationComp from '../ReusableComponents/PaginationComp'

const CRICOSFinder = () => {

    // Lists of course details from json file
    const [courses, setCourses] = useState([]);
    // state to save user's input query
    const [query, setQuery] = useState("");
    // state to save  list of courses after filter (matching with user query)
    const [searchResult, setSearchResult] = useState([]);
    // state to set searching - shows CourseList section only when searching is true
    const [searching, setSearching] = useState(false);
    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [coursesPerPage] = useState(7);


    useEffect( () => {
        setCourses([...jsonData]);
        }, []
    );

    useEffect( () => {
        searchResultHandler()
        }, [query]
    );

    const userInputHandler = (userInput) => {
        setQuery(userInput);
        (userInput === '') ? setSearching(false) : setSearching(true);
    };

    const searchResultHandler = () => {
        let filterQuery = query.toLowerCase();
         const searchResultList = courses.filter((course) => {
                if (course.name.toLowerCase().indexOf(filterQuery) > -1 ) {
                    return course;
                }
                if( course.code.toLowerCase().indexOf(filterQuery) > -1 ){
                    //console.log("return", course);
                    return course;
                }
            });
         setSearchResult([...searchResultList]);
    };

    //get Current course result.. PaginationComp
    const indexOfLastItem = currentPage * coursesPerPage;
    const indexOfFirstItem = indexOfLastItem - coursesPerPage;
    const currentSearchedCourses = searchResult.slice(indexOfFirstItem, indexOfLastItem);
    // change page (Pagination)
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return(
        <Wrapper id="cricosFinder">
            <Container>
                <h1><i className="fas fa-search"></i>  CRICOS Finder </h1><br />
                <Search userInputHandler={userInputHandler} query={query} />
                {
                    searching
                        ? ( <>
                            <CourseList searchResult ={currentSearchedCourses} /> <br/>
                            <PaginationComp itemsPerPage={coursesPerPage}
                                            searchResult={searchResult.length}
                                            paginate={paginate} />
                           </>
                        )
                        : null
                }
            </Container>
        </Wrapper>
    )
};
export default CRICOSFinder;