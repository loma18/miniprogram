import { menus } from 'constants/menus';

export const getDictMenus = (menusList = menus) => {
    let dictMenus = {},
        childrenMenus = {};
    for (let i = 0, len = menusList.length; i < len; i++) {
        dictMenus[menusList[i].key] = menusList[i];
        if (menusList[i].children.length > 0) {
            childrenMenus = getDictMenus(menusList[i].children)
            Object.assign(dictMenus, childrenMenus)
        }
    }

    return dictMenus;
}

export const getRootLevelKey = () => {
    return menus.map(item => item.key)
}