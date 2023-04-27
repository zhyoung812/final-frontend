
import styles from "../../styles/customers.orders.module.css";
import { useForm } from 'react-hook-form';
import data from '../../data/data'

const Order = () => {
    const { register, handleSubmit, errors, reset } = useForm();

    let save = async (values) => {

        console.log(values);
        const response = await data.saveOrder(values);
        console.log(response);
        if(response != null){
            reset();

        }

    }

    return(
        <>
            <div className={styles.container}>
                <h1 className={styles.form_title}>Create a new order</h1>
                <form action="#" onSubmit={handleSubmit(save)}>
                    <div className={styles.main_user_info}>
                        <div className={styles.user_input_box}>
                            <label htmlFor="email">Email</label>
                            <input type="email"
                                   id="email"
                                   name="email"
                                   {...register('email',
                                       {required: true,
                                           message: 'please enter an email address' })}
                                   placeholder="Enter Email"/>
                        </div>

                        <div className={styles.user_input_box}>
                            <label htmlFor="bread">Bread Type</label>
                            <input type="text"
                                   id="bread"
                                   name="bread"
                                   {...register('bread',
                                       {required: true,
                                           message: 'please enter a bread' })}
                                   placeholder="Bread type here"/>
                        </div>

                        <div className={styles.user_input_box}>
                            <label htmlFor="cheese">Cheese Type</label>
                            <input type="text"
                                   id="cheese"
                                   name="cheese"
                                   {...register('cheese',
                                       {required: true,
                                           message: 'please enter a cheese' })}
                                   placeholder="Cheese type here"/>
                        </div>

                        <div className={styles.user_input_box}>
                            <label htmlFor="turkey">How many orders of Turkey do you want?</label>
                            <input type="number"
                                   id="turkey"
                                   name="turkey"
                                   {...register('turkey',
                                       {required: true,
                                               message: 'Please enter a turkey amount, or 0' })}
                                   defaultValue={0}/>
                        </div>

                        <div className={styles.user_input_box}>
                            <label htmlFor="avocado">How many orders of Avocado do you want?</label>
                            <input type="number"
                                   id="avocado"
                                   name="avocado"
                                   {...register('avocado',
                                       {required: true,
                                               message: 'Please enter a avocado amount, or 0' })}
                                   defaultValue={0}/>
                        </div>

                        <div className={styles.user_input_box}>
                            <label htmlFor="ham">How many orders of Ham do you want?</label>
                            <input type="number"
                                   id="ham"
                                   name="ham"
                                   {...register('ham',
                                       {required: true,
                                               message: 'Please enter a ham amount, or 0' })}
                                   defaultValue={0}/>
                        </div>

                        <div className={styles.user_input_box}>
                            <label htmlFor="vegetables">What vegetables do you want?</label>
                            <input type="text"
                                   id="vegetables"
                                   name="vegetables"
                                   {...register('vegetables',
                                       {required: false,
                                               message: 'Please enter vegetables wanted' })}
                                               placeholder="Enter Vegetables"/>
                        </div>

                        <div className={styles.user_input_box}>
                            <label>Sides</label>
                        </div>

                        <div className={styles.sides}>
                            <label htmlFor="smalldrink">Add a small drink?</label>
                            <input type="number"
                                   id="smalldrink"
                                   name="smalldrink"
                                   {...register('smalldrink',
                                       {required: true,
                                               message: 'Please enter a small drink amount, or 0' })}
                                   defaultValue={0}/>
                        </div>

                        <div className={styles.sides}>
                            <label htmlFor="mediumdrink">Add a medium drink?</label>
                            <input type="number"
                                   id="mediumdrink"
                                   name="mediumdrink"
                                   {...register('mediumdrink',
                                       {required: true,
                                               message: 'Please enter a medium drink amount, or 0' })}
                                   defaultValue={0}/>
                        </div>

                        <div className={styles.sides}>
                            <label htmlFor="largedrink">Add a large drink?</label>
                            <input type="number"
                                   id="largedrink"
                                   name="largedrink"
                                   {...register('largedrink',
                                       {required: true,
                                               message: 'Please enter a large drink amount, or 0' })}
                                   defaultValue={0}/>
                        </div>

                        <div className={styles.sides}>
                            <label htmlFor="chips">Add chips?</label>
                            <input type="number"
                                   id="chips"
                                   name="chips"
                                   {...register('chips',
                                       {required: true,
                                               message: 'Please enter a chips amount, or 0' })}
                                   defaultValue={0}/>
                        </div>

                        <div className={styles.sides}>
                            <label htmlFor="chipType">Type of chip</label>
                            <input type="text"
                                   id="chipType"
                                   name="chipType"
                                   {...register('chipType',
                                       {required: false,
                                               message: 'Please enter a chip type' })}
                                   defaultValue=""/>
                        </div>

                        </div>


                    <div className={styles.form_submit_btn}>
                        <input type="submit" value="save" ></input>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Order;