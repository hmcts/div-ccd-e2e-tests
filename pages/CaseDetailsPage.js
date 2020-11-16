const I = actor();

module.exports = {

  selectors: {
    tabs: 'ul.tabs-list',
    tabsList: 'ul.tabs-list li'
  },
  listOfTabs: [
    'Case List', 
    'Create case',
    'Find case',
    'History', 
    'Solicitor',
    // "Corespondance",
    'Petitioner', 
    'Respondent', 
    'Reason for divorce', 
    'Jurisdiction', 
    'Prayer / Other Legal Proceedings',  
    'Payment', 
    'Documents', 
    'Marriage Certificate' 
    // "Notes" 
  ],

  shouldDisplayTabs() {
    I.waitForElement(this.selectors.tabsList, 20);
    within({ frame: this.selectors.tabs }, () => {
      this.listOfTabs.forEach(item => {return I.see(item);});
    });
  },

  clickTab(tab) {
    I.waitForElement(this.selectors.tabsList, 25);
    I.click(tab);
  }
};
