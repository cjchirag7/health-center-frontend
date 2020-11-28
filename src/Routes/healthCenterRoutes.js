import FinancialBudget from '../views/healthCenterManagement/financialBudget';
import AddBudget from '../views/healthCenterManagement/addBudget';
import ManageManufacturers from '../views/healthCenterManagement/manageManufacturers';
import AddManufacturer from '../views/healthCenterManagement/addManufacturer';
import ManageMedicines from '../views/healthCenterManagement/manageMedicines';
import AddMedicine from '../views/healthCenterManagement/addMedicine';
import EditManufacturer from '../views/healthCenterManagement/editManufacturer';
import EditMedicine from '../views/healthCenterManagement/editMedicine';
import Dashboard from '../core/Home';


const healthCenterRoutes = [
    
    { path: '/', exact: true, name: 'Login', userAuth: ['emp'] },
    { path: '/home', name: 'Dashboard', component: Dashboard, exact: true, userAuth: ['emp'] },
    { path: '/healthCenter/financial_budget', name: 'FinancialBudget', component: FinancialBudget, exact: true, userAuth: ['emp'] },    
    { path: '/healthCenter/add_budget', name: 'AddBudget', component: AddBudget, exact: true, userAuth: ['emp'] },                        
    { path: '/healthCenter/manage_manufacturers', name: 'ManageManufacturers', component: ManageManufacturers, exact: true, userAuth: ['emp'] },    
    { path: '/healthCenter/edit_manufacturer/:id', name: 'EditManufacturer', component: EditManufacturer, exact: true, userAuth: ['emp'] },    
    { path: '/healthCenter/add_manufacturer', name: 'AddManufacturer', component: AddManufacturer, exact: true, userAuth: ['emp'] },        
    { path: '/healthCenter/manage_medicines', name: 'ManageMedicines', component: ManageMedicines, exact: true, userAuth: ['emp'] },    
    { path: '/healthCenter/edit_medicine/:id', name: 'EditMedicine', component: EditMedicine, exact: true, userAuth: ['emp'] },    
    { path: '/healthCenter/add_medicine', name: 'AddMedicine', component: AddMedicine, exact: true, userAuth: ['emp'] },            
];
export default healthCenterRoutes;