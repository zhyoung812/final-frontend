import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from "../../styles/customers.module.css";
import data from '../../data/data'
import { useState, useEffect } from "react";
import Spinner from "../../components/Spinner";
import Link from "next/link";


const inter = Inter({ subsets: ['latin'] })

import { useRouter } from 'next/router'

// let reorder = (pid) => {
//     data.reorder(pid)
// }

let findSides = (sides) => {
  let count = [0, 0, 0, 0]
  if(sides === undefined){
    return count;
  }
  for(let i = 0; i < sides.length; i++){
      if(sides.type == "drink"){
          count[sides.size - 1] ++
      }
      else{
          count[3] ++
      }
  }
  return count
}



export default function Customers () {
  // let reorder = (pid) => {
  //   data.reorder(pid)
  // }
  const router = useRouter();
        const [customers, setCustomers] = useState([]);
        const [loading, setLoading] = useState(false);
        const [pid, setPid] = useState(null);
        const [price, setPrice] = useState(0);

        useEffect(() => {
          if (router.isReady && router.query && router.query.pid) {
            const {pid}  = router.query;
            setPid(pid);
                  setLoading(true);
                  data.getReceipt(pid)
                    .then((data) => {
                      setCustomers([data]);
                      setLoading(false);
                      console.log(data);
                      // sides = findSides(data.sides);
                      // let temp = JSON.parse(data)
                      setPrice(data.total);
                    })
                    .catch((e) => console.log(e));
          }
          
        }, [router.isReady]);


    //     useEffect(() => {
    // console.log("here 2" + pid)
    // console.log({pid})
    //       setLoading(true);
    //       data.getReceipt(pid)
    //         .then((data) => {
    //           setCustomers([data]);
    //           setLoading(false);
    //           console.log(data);
    //           sides = generateSides(data.sides);
    //           price = data.price;
    //         })
    //         .catch((e) => console.log(e));
    //     }, []);
      
        if (loading) {
          return <Spinner />;
        } else
          return (
            <>
              <div className={styles.tableContainer}>
                {/* {customers.map(p, i) => (<p>{p.response}</p>)} */}
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
                </tr>
              ))}
                  </tbody>
                </table> 
              </div>
              <div className={styles.receiptStuff}>
                <h2 className={styles.receiptPrice}>Total: {price}</h2>
              <Link href="orders/view" className={styles.receiptPrice}><button onClick={() => {data.reorder(pid)}} className={styles.receiptPrice}>Reorder This!</button></Link> <br/>
              <Link href="/orders/view" className={styles.receiptPrice}>Go Back</Link>
              </div>
            </>
          );
      };
