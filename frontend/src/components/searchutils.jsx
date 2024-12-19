// handleSearch function for filtering data based on search query
export const handleSearch = (event, data, setFilteredResults) => {
    const query = event.target.value.toLowerCase(); // Convert search query to lowercase for case-insensitive matching
    
    // Combine courses and books for searching
    const combinedData = [...data.courses, ...data.books];
    
    // Filter the data based on the query
    const filteredData = combinedData.filter((item) =>
      item.name.toLowerCase().includes(query) || item.title.toLowerCase().includes(query)
    );
    
    // Update the filtered results
    setFilteredResults(filteredData);
  };
  
  // handleSearchIconClick function to handle the search button click
  export const handleSearchIconClick = (searchQuery, data, setFilteredResults) => {
    if (searchQuery.trim()) {
      const combinedData = [...data.courses, ...data.books];
      
      // Filter based on name or title
      const filteredData = combinedData.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      setFilteredResults(filteredData);
    }
  };
  