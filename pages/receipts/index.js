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
        let sides = [0, 0, 0, 0];
        let price = 0;

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
                      // price = data.price;
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
                      <th>Receipt</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customers.map((c, i) => (
                      <tr key={i}>
                          <td data-label="Receipt">{c.response}</td>
                      </tr>
                    ))}
                  </tbody>
                </table> 
              </div>
              <div className={styles.receiptStuff}>
              <Link href="orders/view" className={styles.receiptPrice}><button onClick={() => {data.reorder(pid)}} className={styles.receiptPrice}>Reorder This!</button></Link> <br/>
              <Link href="/orders/view" className={styles.receiptPrice}>Go Back</Link>
              </div>
            </>
          );
      };
