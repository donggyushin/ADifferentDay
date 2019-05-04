import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const WIDTH = width;
const HEIGHT = height;

const HEADER_HEIGHT = HEIGHT / 8.5;
const BODY_HEIGHT = HEIGHT - HEADER_HEIGHT;

const ADDNEW_WIDTH = WIDTH / 1.5;
const ADDNEW_HEIGHT = HEIGHT / 15;

const TODOITEM_HEIGHT = HEIGHT / 10;
const TRASHBUTTON_WIDTH = WIDTH / 3;

const Layout = {
  width: WIDTH,
  height: HEIGHT,
  headerHeight: HEADER_HEIGHT,
  bodyHeight: BODY_HEIGHT,
  addnewWidth: ADDNEW_WIDTH,
  addnewHeight: ADDNEW_HEIGHT,
  todoItemHeight: TODOITEM_HEIGHT,
  trashButtonWidth: TRASHBUTTON_WIDTH
};

export default Layout;
