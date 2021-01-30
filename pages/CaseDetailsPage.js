const I = actor();

module.exports = {

  selectors: {
    tabs: 'ul.tabs-list',
    tabsList: 'ul.tabs-list li'
  },
  listOfTabs: [
    'Case List', 
    'Create case',
    'Notice of change',
    'Find case',
    'History', 
    'Solicitor',
    // "Corespondance",
    'Petition', 
    'AOS', 
    'Decree Nisi', 
    'Outcome of Decree Nisi', 
    'Decree Absolute',  
    'Payment', 
    'Documents', 
    'Marriage Certificate' 
    // "Notes" 
  ],

  shouldDisplayTabs() {
    I.waitForElement(this.selectors.tabsList);
    within({ frame: this.selectors.tabs }, () => {
      this.listOfTabs.forEach(item => {return I.see(item);});
    });
  },

  clickTab(tab) {
    I.waitForElement(this.selectors.tabsList);
    I.click(tab);
  }
};
