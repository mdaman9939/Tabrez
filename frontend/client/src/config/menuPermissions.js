import React from 'react'

const menuPermissions = {
    admin: {
      Sales: ["New Invoice", "View Invoice", "New Estimate", "Sale Return", "View Return"],
      Purchase: ["Add Purchase", "View Purchase", "Add Supplier", "New Purchase Order", "View Purchase Order"]
    },
    customer: {
      Sales: ["View Invoice"],
      Purchase: []
    },
    superadmin: {
      Sales: ["New Invoice", "View Invoice", "New Estimate", "Sale Return", "View Return"],
      Purchase: ["Add Purchase", "View Purchase", "Add Supplier", "New Purchase Order", "View Purchase Order"]
    }
  };
  
  export default menuPermissions;
  

