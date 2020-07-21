export const updateObjectInArray = (items, objPropName, actionProp, newObjProp) => {
   return items.map((user) => {
        if (user[objPropName] === actionProp) {
            return { ...user, ...newObjProp }
        }
        return user;
    })
}