import productIcon from '../../assets/images/image 65.png';
import actionIcon from '../../assets/icons/Ellipse 1.png';
import './style.product_table.css';
const data = [
    {name: 'Miniket Rice Premium', category: 'Groceries', unit: '5 kg Pack', stock: 5, price: '৳ 305.00'},
    {name: 'Miniket Rice Premium', category: 'Groceries', unit: '5 kg Pack', stock: 5, price: '৳ 305.00'},
    {name: 'Miniket Rice Premium', category: 'Groceries', unit: '5 kg Pack', stock: 5, price: '৳ 305.00'},
    {name: 'Miniket Rice Premium', category: 'Groceries', unit: '5 kg Pack', stock: 5, price: '৳ 305.00'},
    {name: 'Miniket Rice Premium', category: 'Groceries', unit: '5 kg Pack', stock: 5, price: '৳ 305.00'},
    {name: 'Miniket Rice Premium', category: 'Groceries', unit: '5 kg Pack', stock: 5, price: '৳ 305.00'},
    {name: 'Miniket Rice Premium', category: 'Groceries', unit: '5 kg Pack', stock: 5, price: '৳ 305.00'},
    {name: 'Miniket Rice Premium', category: 'Groceries', unit: '5 kg Pack', stock: 5, price: '৳ 305.00'},
    {name: 'Miniket Rice Premium', category: 'Groceries', unit: '5 kg Pack', stock: 5, price: '৳ 305.00'},
    {name: 'Miniket Rice Premium', category: 'Groceries', unit: '5 kg Pack', stock: 5, price: '৳ 305.00'},
    {name: 'Miniket Rice Premium', category: 'Groceries', unit: '5 kg Pack', stock: 5, price: '৳ 305.00'},
    {name: 'Miniket Rice Premium', category: 'Groceries', unit: '5 kg Pack', stock: 5, price: '৳ 305.00'},
    {name: 'Miniket Rice Premium', category: 'Groceries', unit: '5 kg Pack', stock: 5, price: '৳ 305.00'},
    {name: 'Miniket Rice Premium', category: 'Groceries', unit: '5 kg Pack', stock: 5, price: '৳ 305.00'},
    {name: 'Miniket Rice Premium', category: 'Groceries', unit: '5 kg Pack', stock: 5, price: '৳ 305.00'},
    {name: 'Miniket Rice Premium', category: 'Groceries', unit: '5 kg Pack', stock: 5, price: '৳ 305.00'},
    {name: 'Miniket Rice Premium', category: 'Groceries', unit: '5 kg Pack', stock: 5, price: '৳ 305.00'},
    {name: 'Miniket Rice Premium', category: 'Groceries', unit: '5 kg Pack', stock: 5, price: '৳ 305.00'},

]

const productTable = () => {
    return (
        <table className="table table-auto min-w-full text-left">
            <thead>
                <tr >
                    <th className="first-heading">Item Image</th>
                    <th>Item Name</th>
                    <th>Category</th>
                    <th>Unit</th>
                    <th>Stock</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((val, key) => {
                        return(
                            <tr key={key}>
                                <td><img src={productIcon} alt="product icon" className="inline-block icon"/></td>
                                <td>{val.name}</td>
                                <td>{val.category}</td>
                                <td>{val.unit}</td>
                                <td>{val.stock}</td>
                                <td>
                                    {val.price} 
                                    <span className='action-icons'>
                                        <img src={actionIcon} className="inline-block" alt="action icon"/>
                                        <img src={actionIcon} className="inline-block" alt="action icon"/>
                                        <img src={actionIcon} className="inline-block" alt="action icon"/>
                                    </span>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
}

export default productTable;