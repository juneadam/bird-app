// scratch pad for studies in further React functionality

/** State that does not contain 'June' */
function useNotJune(initialValue) {
    const [name, setName] = useState(initialValue || 'Christina');
  
    const setNotJune = (newValue) => {
      if (newValue.toLowerCase === 'june') {
        return
      }
      setName(newValue);
    }
  
    return [name, setNotJune];
  }
  
  function useEventuallyJune(initialValue) {
    const [name, setName] = useState(initialValue || 'Christina');
  
    const setEventuallyJune = (newValue) => {
      const action = (previousValue) => 'poob'
  
      setName('poob')
      setName(action)
  
      setName((previousValue) => {
        if (previousValue.toLowerCase === "june") return "June";
        else return newValue;
      });
    }
  
    return [name, setEventuallyJune];
  }
  
  