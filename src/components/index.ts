import * as common from './common/';
import { MenuItem,ParentMenuItem } from './common/typeDefinitions';
import * as dragging from './dragging/';
import * as form from './form/';
import * as layout from './layout/';
import * as skin from '../css/skins';
import * as enums from './enums';
import {ValueChangedEvent,ListItemValue,SelectListItemValue,FormInputType,TranslateMethod} from './form/typesDefinitions';
import * as utilities from './utilities';
import * as extended from './extended';
import {AutoCompleteEntry} from './extended/typeDefinitions';
import {Tab} from './layout/interfaces';

export const {Animation,Button,ButtonsContainer,ButtonAdd,ButtonCancel,ButtonDelete,ButtonDisable,ButtonDownload,
    ButtonEdit,ButtonEnable,ButtonOkay,ButtonPrint,ButtonRefresh,ButtonSave,ButtonUpload,
    CheckMark,DropDown,DynamicSlot,Filter,Icon,Message,Notification,PageNotification,Pagination,Promised,
    Progress,NavBar,Menu,MenuLabel,MenuList,MenuEntry,ToolTip,Badge,Tag,Tags} = common;
export const {DraggableItem,DropZone,Sortable} = dragging;
export const {AutoComplete,CheckboxGroup,Checkbox,DateField,ComponentForm,FullEditor,
    Header,Hidden,NumberField,Paragraph,RadioGroup,Select,Switch,Text,
    TextArea,Time,FormComponent} = form;
export const {Banner,Box,Breadcrumbs,Card,Column,ColumnContainer,
    List,ListItem,ModalCard,Panel,Table,Tabs,Modal,SlideOut} = layout;
export const {AVAIABLE_SKINS,setSkin} = skin;
export const {ColorTypes,NoticeTypes,Sizes,AnimationSpeeds,AnimationTypes,IconSizes,ChartLegendPositions,ChartTypes,DropZoneQuadrants,
    BreadCrumbAlignments,BreadCrumbSeperators,ColumnContainerModifiers,ColumnSizes,
    ColumnOffsetSizes,BorderTypes,TabAlignments,TabStyles,TileSizes,TileTypes,FixedNavBarPositions,FixedMenuPositions,
    BadgePositiions,ToolTipPositions,ToolTipTextAlignments,ButtonAlignments} = enums;
export const {loadNonEs6Module} = utilities;
export const {Chart,CodeWriter,Grid} = extended;
export type {ValueChangedEvent,ListItemValue,SelectListItemValue,FormInputType,TranslateMethod,MenuItem,ParentMenuItem,AutoCompleteEntry,Tab};