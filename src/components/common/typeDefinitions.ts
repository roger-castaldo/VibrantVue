import { MaybeRef } from "vue";
import { ColorTypes, NoticeTypes, Sizes } from "../../enums.ts";

export interface IPaginationProperties {
    /**
     * Indicates if it should use Next/Previous instead of Newer/Older
     */
    use_next?:boolean,
    /**
     * Indicates if there are more items in the paging so Next/Newer should be enabled
     */
    has_more?:boolean,
    /**
     * Indicates if there are previous items in the paging so Previous/Older should be enabled
     */
    has_previous?:boolean
    /**
     * The size of the pagination buttons
     */
    size?:Sizes,
    /**
     * Use rounded buttons
     */
    rounded?:boolean,
    /**
     * Set the color of the buttons
     */
    button_type?:ColorTypes,
    /**
     * The total number of pages available
     */
    total_pages?:MaybeRef<number>,
    /**
     * The current page number
     */
    current_page?:MaybeRef<number>,
    /**
     * Set to true if the first page is 0
     */
    zero_page_index?:boolean
};

export type MenuItem = {
    /**
     * The title to use in the menu item
     */
    title:MaybeRef<string>|string,
    /**
     * Inidicates if this menu item is active
     */
    active?:boolean,
    /**
     * The icon to use for the menu item
     */
    icon?:string,
    /**
     * The url of the menu item
     */
    href?:string,
    /**
     * The click call back to call when this menu item is clicked
     * @returns void
     */
    onClick?:()=>void
};

export type ParentMenuItem = MenuItem & {
    /**
     * The child items of this menu item
     */
    childItems?:MenuItem[]
};

export type WizardStep = {
    /**
     * The name of the Wizard Step, this is used as the slot name
     */
    name:string,
    /**
     * The title to display for this Step
     */
    title:MaybeRef<string>|string,
    /**
     * The icon to use in the step title
     */
    icon?:string,
    /**
     * A description of the step
     */
    description?:string,
    /**
     * The color styling to use for this step
     */
    type?:NoticeTypes,
    /**
     * Indicates if this step is currently valid
     */
    is_valid?:boolean
};

export interface IButtonBasicProperties{
    /**
     * Indicates if the button is disabled
     */
    disabled?:boolean,
    /**
     * The size of the button
     */
    size?:Sizes,
    /**
     * Inidicates if it is hidden when on mobile
     */
    hide_mobile?:boolean,
    /**
     * Inidicates if it is hidden when on table
     */
    hide_tablet?:boolean,
    /**
     * Inidicates if it is hidden when on desktop
     */
    hide_desktop?:boolean,
    /**
     * Inidicates if it is rounded
     */
    is_rounded?:boolean 
};

export interface IButtonProperties extends IButtonBasicProperties{
    /**
     * The icon to use in the button
     */
    icon?:string|null,
    /**
     * The color to use on the button
     */
    type?:ColorTypes,
    /**
     * The string content of the button (title)
     */
    title?:string|null
};

export type DropDownItem = {
    /**
     * The title (content) for the drop down item
     */
    title:MaybeRef<string>|string,
    /**
     * Indicates if it is currently active
     */
    active?:boolean,
    /**
     * The icon to display with it
     */
    icon?:string,
    /**
     * The url of the drop down item
     */
    href?:string,
    /**
     * The click call back to call when this drop down item is clicked
     * @returns void
     */
    onClick?:()=>void
}

export type DropDownBlock = {
    /**
     * The collection of Drop Down items to block together
     */
    children:(string|DropDownItem)[]
}