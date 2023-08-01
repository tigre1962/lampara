export const items = [
    {id: "0", name: "Joaquin", phone: "2964-654923", favorite: true },
    {id: "1", name: "Noha", phone: "2964-654924", favorite: true },
    {id: "2", name: "Kotai", phone: "2964-654925", favorite: true },
    {id: "3", name: "yoni", phone: "2964-654933", favorite: false },
    {id: "4", name: "Emiliano", phone: "2964-654943", favorite: false },
    {id: "5", name: "Luna", phone: "2964-654823", favorite: true },
    {id: "6", name: "Bety", phone: "2964-654723", favorite: false },
    {id: "7", name: "Cruela", phone: "2964-654323", favorite: false },
    {id: "8", name: "Paola", phone: "2964-654223", favorite: false },
    {id: "9", name: "Juanita", phone: "2964-654843", favorite: false },
    {id: "10", name: "Yara", phone: "2964-655923", favorite: true },
];

export function getContact(id) {
    return items.find((item) => item.id === id);
}