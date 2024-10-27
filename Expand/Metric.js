import { Dimensions } from "react-native";


//bu metric responsive için ama bu projede kullanmadım felx li yaptıgım için.
//metric genelde yardımcı oluyor between screenlar için ama ben daha çok tailwind css taraftarıyım 
//bu projede zaten tailwind css var ama bir türlü import edemedim sanırım relaselarde problem çıkıyor bir de babelde 
//eslint var zaten eslintde sorun yok neyse :)

const {width,height} = Dimensions.get('window');

const ExpandWidth = 375;
const ExpandHeight = 812;

const HorizontalScale = size => (width / ExpandWidth) * size;
const VerticalScale = size => (height / ExpandHeight) * size;
const moderateScale = (size,factor = 0.5) => size + (HorizontalScale(size) - size) * factor;

export {HorizontalScale,VerticalScale,moderateScale}




