import { Container, Typography } from "@mui/material";
import { ReceiptLong } from "@mui/icons-material";
import TransactionList from "./TransactionList";

export default function Transactions() {
  return (
    <Container maxWidth="xl" className="page transactions-page">
      <div className="transactions-title-icon">
        <ReceiptLong />
      </div>
      <Typography className="welcome-line">YOUR ACTIVITY</Typography>
      <Typography variant="h3" className="page-title">
        Transactions
      </Typography>
      <Typography className="page-subtitle">
        A clear view of every dollar coming in and going out.
      </Typography>
      <TransactionList />
    </Container>
  );
}
