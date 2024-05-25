import { createContext } from "react";

const DeleteContext = createContext({
    // confirmDelete : true,
    confirmDeleteInfo : (isConfirm) => {}
});

export default DeleteContext;