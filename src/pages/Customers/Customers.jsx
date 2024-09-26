"use client";

import React from "react";
import { Badge } from "@mui/material"; // Material UI
import { Card, CardContent, CardHeader, Typography } from "@mui/material"; // Material UI
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap
import classNames from "classnames"; // For conditional class names

export default function Customers() {
  const orders = [
    {
      customer: "Liam Johnson",
      email: "liam@example.com",
      type: "Sale",
      status: "Fulfilled",
      date: "2023-06-23",
      amount: "$250.00",
    },
    {
      customer: "Olivia Smith",
      email: "olivia@example.com",
      type: "Refund",
      status: "Declined",
      date: "2023-06-24",
      amount: "$150.00",
    },
    {
      customer: "Noah Williams",
      email: "noah@example.com",
      type: "Subscription",
      status: "Fulfilled",
      date: "2023-06-25",
      amount: "$350.00",
    },
    {
      customer: "Emma Brown",
      email: "emma@example.com",
      type: "Sale",
      status: "Fulfilled",
      date: "2023-06-26",
      amount: "$450.00",
    },
    {
      customer: "Liam Johnson",
      email: "liam@example.com",
      type: "Sale",
      status: "Fulfilled",
      date: "2023-06-23",
      amount: "$250.00",
    },
    {
      customer: "Olivia Smith",
      email: "olivia@example.com",
      type: "Refund",
      status: "Declined",
      date: "2023-06-24",
      amount: "$150.00",
    },
    {
      customer: "Noah Williams",
      email: "noah@example.com",
      type: "Subscription",
      status: "Fulfilled",
      date: "2023-06-25",
      amount: "$350.00",
    },
    {
      customer: "Emma Brown",
      email: "emma@example.com",
      type: "Sale",
      status: "Fulfilled",
      date: "2023-06-26",
      amount: "$450.00",
    },
  ];

  return (
    <Card className="shadow-md mx-auto mt-5 w-4/5">
      <CardHeader className="px-7">
        <Typography variant="h5">Orders</Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Recent orders from your store.
        </Typography>
      </CardHeader>
      <CardContent>
        <table className="table table-striped w-full">
          <thead>
            <tr>
              <th>Customer</th>
              <th className="d-none d-sm-table-cell">Type</th>
              <th className="d-none d-sm-table-cell">Status</th>
              <th className="d-none d-md-table-cell">Date</th>
              <th className="text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className={classNames({"bg-light": index % 2 === 0})}>
                <td>
                  <div className="font-medium">{order.customer}</div>
                  <div className="d-none d-md-block text-muted">
                    {order.email}
                  </div>
                </td>
                <td className="d-none d-sm-table-cell">{order.type}</td>
                <td className="d-none d-sm-table-cell">
                  <Badge
                    variant={order.status === "Fulfilled" ? "secondary" : "outline"}
                    className="text-xs"
                  >
                    {order.status}
                  </Badge>
                </td>
                <td className="d-none d-md-table-cell">{order.date}</td>
                <td className="text-right">{order.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
