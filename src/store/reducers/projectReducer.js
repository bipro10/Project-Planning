const initState = {
    projects: [
      {id: '1', title: 'Cofee Maker', content: 'A cofee maker app, serve cofee while i code.'},
      {id: '2', title: 'Dream sharing', content: 'special social networking apps, sharing dreams with friend'},
      {id: '3', title: 'Startup failures', content: 'You can learn a lot from failures of others. What if there was a website where people shared their startup failures so others can learn from that..'},
      {id: '4', title: 'GRE Dictionary', content: 'A web based dictionary apps for higher study aspirants'}
    ]
  }
  
  const projectReducer = (state = initState, action) => {
    return state;
  };
  
  export default projectReducer;