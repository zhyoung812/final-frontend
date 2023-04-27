import styles from "../../styles/customers.module.css";
import data from '../../data/data'
import { useState, useEffect } from "react";
import Spinner from "../../components/Spinner";
import Link from "next/link";

let findSides = (sides) => {
  let count = [0, 0, 0, 0]
  if(sides === undefined){
    return count;
  }
  for(let i = 0; i < sides.length; i++){
      if(sides[i].type == "Drink"){
          count[sides[i].size - 1] ++
      }
      else{
          count[3] ++
      }
  }
  return count
}

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);
  let sides = [0, 0, 0, 0];

  useEffect(() => {
    setLoading(true);
    data.findAllOrders()
      .then((data) => {
        setCustomers(data);
        setLoading(false);
        console.log(data);

      })
      .catch((e) => console.log(e));
  }, []);

  if (loading) {
    return <Spinner />;
  } else
    return (
      <>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Order Id</th>
                <th>Customer Id</th>
                <th>Turkey Count</th>
                <th>Avocado Count</th>
                <th>Ham Count</th>
                <th>Vegetables</th>
                <th>Bread</th>
                <th>Cheese</th>
                <th>Small Drink Count</th>
                <th>Medium Drink Count</th>
                <th>Large Drink Count</th>
                <th>Chips Count</th>
                <th>Reciept</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((c, i) => (
                <tr key={i}>
                    <td data-label="Order Id">{c.id}</td>
                    <td data-label="Customer Id">{c.customerId}</td>
                  <td data-label="Turkey Count">{c.turkeyCount}</td>
                  <td data-label="Avocado Count">{c.avocadoCount}</td>
                  <td data-label="Ham Count">{c.hamCount}</td>
                  <td data-label="Vegetables">{c.vegetables}</td>
                  <td data-label="Bread">{c.bread}</td>
                  <td data-label="Cheese">{c.cheese}</td>
                  <td data-label="Small Drink Count">{findSides(c.sides)[0]}</td>
                  <td data-label="Medium Drink Count">{findSides(c.sides)[1]}</td>
                  <td data-label="Large Drink Count">{findSides(c.sides)[2]}</td>
                  <td data-label="Chips Count">{findSides(c.sides)[3]}</td>
                  <td data-label="Reciept"><Link href= {"../receipts?pid=" + c.id}>Receipt</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
};

export default Customers;
