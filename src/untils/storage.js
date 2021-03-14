import lscache from "lscache";
const parseData = function(type) {
    if (type === "[]") return [];
    return {};
};
const Storage = {
    get(key, parseType) {
        let data = lscache.get(key);
        try {
            if (data && parseType) {
                data = JSON.parse(data);
            }
    
            if (!data && parseType) {
                data = parseData(parseType);
            }
        } catch (err) {
            //config parse ex: "{}" or "[]"
            data = parseData(parseType);
        }
    
        return data || "";
      },
    set(key, value, expire) {
        expire = expire || "3*24*60";
        lscache.set(key, value, expire);
    },
    remove(key) {
        lscache.remove(key);
    }
}


export default Storage