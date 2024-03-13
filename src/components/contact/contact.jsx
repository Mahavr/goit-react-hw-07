import css from "./contact.module.css";
import { AiOutlineContacts, AiOutlinePhone } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
export const Contact = ({ item: { id, name, phone } }) => {
  const dispatch = useDispatch();
  return (
    <li className={css.item}>
      <div>
        <div className={css.itemsWrapper}>
          <AiOutlineContacts size="25px " color="#f0efea" />
          <p className={css.text}>{name}</p>
        </div>
        <div className={css.itemsWrapper}>
          <AiOutlinePhone size="25px" color="#f0efea" />
          <p className={css.text}>{phone}</p>
        </div>
      </div>
      <button
        className={css.button}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};
