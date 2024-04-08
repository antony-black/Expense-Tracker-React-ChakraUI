import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [formData, setFormData] = useState({
    type: "expense",
    amount: 0,
    description: "",
  });
  const [value, setValue] = useState("expense");
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [allTransanction, setAllTransanction] = useState([]);

  const handleFormSubmit = (currentData) => {
    console.log(currentData);

    if (!currentData.description || !currentData.amount) return;

    setAllTransanction([
      ...allTransanction,
      { ...currentData, id: Date.now() },
    ]);
  };

  return (
    <GlobalContext.Provider
      value={{
        formData,
        setFormData,
        value,
        setValue,
        totalExpense,
        setTotalExpense,
        totalIncome,
        setTotalIncome,
        allTransanction,
        setAllTransanction,
        handleFormSubmit,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
