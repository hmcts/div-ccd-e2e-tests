const I = actor();

module.exports = {

    selectors: {
        tabs: 'ul.tabs-list',
        tabsList: 'ul.tabs-list li',
    },
    listOfTabs: [
        "Case List", 
        "Create Case", 
        "Search", 
        "History", 
        "Solicitor",
        "Petitioner", 
        "Respondent", 
        "Marriage certificate", 
        "Reason for divorce", 
        "Jurisdiction", 
        "Other legal proceedings", 
        "Prayer", 
        "Payment", 
        "Documents", 
        "Admin check", 
        "AOS", 
        "Payment history"
    ],

    shouldDisplayTabs() {
        I.waitForElement(this.selectors.tabsList, 15);
        within({ frame: this.selectors.tabs }, () => {
            this.listOfTabs.forEach(item => I.see(item));
        });
    },

    clickTab(tab) {
        I.waitForElement(this.selectors.tabsList, 15);
        I.click(tab);
    }
}