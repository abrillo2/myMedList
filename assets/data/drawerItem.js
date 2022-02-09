




import Home from '../../src/Screens/Home';
import Reconcilelist from '../../src/Screens/Reconcilelist';
import Addslip from '../../src/Screens/Addslip';
import Takenphoto from '../../src/Screens/Takenphoto'
import AddSlipInfo from '../../src/Screens/AddSlipInfo';
import MyInfo from '../../src/Screens/MyInfo';
import PdfViewer from '../../src/Screens/PdfViewer'
import About from '../../src/components/utilis/About'
import Help from '../../src/Screens/Help'



import appLabels,{appDescription, appScreenName} from '../static_resources/strings'

let drawerItems = [
   {
       title:appScreenName.home,
       icon:"home",
       component:Home,
       screenTitle:appLabels.homeTitle
   },{
    title:appScreenName.addSlip,
    icon:"add",
    component:Addslip,
    screenTitle:appLabels.addPhotoTitle,
    description:appDescription.AddSlipHelpDesctiption
    },{
        title:appScreenName.Reconcile,
        icon:"refresh",
        component:Reconcilelist,
        screenTitle:appLabels.reconcileTitle,
        description:appDescription.ReconcileHelpDesctiption
    },
   {
        title:appScreenName.share,
        icon:"share",
        screenTitle:appLabels.shareTitle,
        description:appDescription.ShareHelpDesctiption,
    },{
        title:"My info",
        icon:"perm-device-information",
        component:MyInfo,
        screenTitle:appLabels.myInfoTitle
    },{
        title:'Review',
        icon : 'preview',
        screenTitle: appLabels.reviewTitle
    },{
        title:appScreenName.about,
        icon:"info",
        component:About,
        screenTitle:appLabels.aboutTitle
    },{
        title:'Help',
        icon : 'help',
        component:Help,
        screenTitle:'HELP'

    },{
        title:appLabels.exit,
        icon:"exit-to-app"
    },{
        title:appScreenName.takenPhoto,
        icon:null,
        component:Takenphoto,
        screenTitle:appLabels.takenPhotoTitle
    },{
        title:appScreenName.addSlipInfo,
        icon:null,
        component:AddSlipInfo,
        screenTitle:appLabels.addSlipTitle
    },{
        title:appScreenName.pdfViewer,
        icon:null,
        component:PdfViewer,
        screenTitle:appLabels.PdfViewerTitle
    }
]

export default drawerItems;