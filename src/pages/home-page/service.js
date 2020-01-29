const MENUS = [
    {id: 1, name: 'Pizza'},
    {id: 2, name: 'Beverages'},
    {id: 3, name: 'Pasta'},
    {id: 4, name: 'Soups'},
    {id: 5, name: 'Sushi'},
    {id: 6, name: 'Snacks'},
];

let count = 0;

const fetchMenus = () => (
    new Promise((resolve, reject) => {
        count === 3 && (count = 0);
        count++;
        count === 1 && setTimeout(() => resolve(MENUS), 1000);
        count === 2 && setTimeout(() => resolve([]), 1000);
        count === 3 && setTimeout(() => reject({message: 'Some error'}), 1000);
    })
);

export default { fetchMenus };
