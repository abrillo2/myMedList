




import Home from '../../src/Screens/Home';
import Share from '../../src/Screens/Share';
import Reconcilelist from '../../src/Screens/Reconcilelist';
import Addslip from '../../src/Screens/Addslip';
import Takenphoto from '../../src/Screens/Takenphoto'
import AddSlipInfo from '../../src/Screens/AddSlipInfo';
import MyInfo from '../../src/Screens/MyInfo';
import PdfViewer from '../../src/Screens/PdfViewer'
import About from '../../src/components/utilis/About'

import appLabels,{appScreenName} from '../static_resources/strings'

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
    screenTitle:appLabels.addPhotoTitle
    },
   {
        title:appScreenName.share,
        icon:"share",
        component:Share,
        screenTitle:appLabels.shareTitle
    },{
        title:appScreenName.Reconcile,
        icon:"refresh",
        component:Reconcilelist,
        screenTitle:appLabels.reconcileTitle
    },{
        title:"My info",
        icon:"perm-device-information",
        component:MyInfo,
        screenTitle:appLabels.myInfoTitle
    },{
        title:appScreenName.about,
        icon:"info",
        component:About,
        screenTitle:appLabels.aboutTitle
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