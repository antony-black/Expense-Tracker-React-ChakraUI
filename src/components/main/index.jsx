import { Flex, Heading, Button, useDisclosure } from "@chakra-ui/react";
import Summary from "../summary";
import ExpenseView from "../expense-view";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";

export default function Main() {
  const {
    totalExpense,
    setTotalExpense,
    totalIncome,
    setTotalIncome,
    allTransanction,
  } = useContext(GlobalContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    let income = 0;
    let expense = 0;

    allTransanction.forEach((item) => {
      item.type === "income"
        ? (income = income + parseFloat(item.amount))
        : (expense = expense + parseFloat(item.amount));
    });
  }, [allTransanction]);

  return (
    <Flex
      textAlign={"center"}
      flexDirection={"column"}
      pr={"5"}
      pl={"5"}
      mb={"20"}
    >
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        mt={"12"}
        mb={"20"}
      >
        <Heading
          color={"green.400"}
          display={["none", "block", "block", "block", "block"]}
        >
          Expense Tracker
        </Heading>
        <Flex alignItems={"center"}>
          <Button onClick={onOpen} bg={"green.300"} color={"#DC143C"} ml={"4"}>
            Add new transaction
          </Button>
        </Flex>
      </Flex>
      <Summary
        totalExpense={totalExpense}
        totalIncome={totalIncome}
        isOpen={isOpen}
        onClose={onClose}
      />
      <Flex
        w={"full"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
        flexDirection={["column", "column", "column", "row", "row"]}
      >
        <ExpenseView />
        <ExpenseView />
      </Flex>
    </Flex>
  );
}
