import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LabelList,
  LineChart, Line
} from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';

export const description = "A collection of sales dashboard charts.";

export default function Orders() {
  // Sample data for sales, deliveries, orders, and rejected goods
  const dataTopSellingProducts = [
    { product: "Product A", sales: 1200 },
    { product: "Product B", sales: 900 },
    { product: "Product C", sales: 700 },
  ];
  
  const dataAOV = [
    { date: "2024-01-01", AOV: 55 },
    { date: "2024-01-02", AOV: 60 },
    { date: "2024-01-03", AOV: 53 },
    { date: "2024-01-04", AOV: 62 },
    { date: "2024-01-05", AOV: 67 },
  ];
  
  const dataCAC = [
    { date: "2024-01-01", CAC: 10 },
    { date: "2024-01-02", CAC: 12 },
    { date: "2024-01-03", CAC: 9 },
    { date: "2024-01-04", CAC: 15 },
    { date: "2024-01-05", CAC: 11 },
  ];
  
  const dataRefundsReturns = [
    { date: "2024-01-01", refunds: 20 },
    { date: "2024-01-02", refunds: 30 },
    { date: "2024-01-03", refunds: 15 },
    { date: "2024-01-04", refunds: 25 },
    { date: "2024-01-05", refunds: 10 },
  ];
  
  const dataWebsiteTraffic = [
    { date: "2024-01-01", traffic: 1000 },
    { date: "2024-01-02", traffic: 1200 },
    { date: "2024-01-03", traffic: 900 },
    { date: "2024-01-04", traffic: 1300 },
    { date: "2024-01-05", traffic: 1500 },
  ];
  
  const dataSalesByRegion = [
    { region: "North", sales: 4000 },
    { region: "South", sales: 3000 },
    { region: "East", sales: 5000 },
    { region: "West", sales: 2000 },
  ];
  
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Existing metrics... */}
  
        {/* Top Selling Products */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Top Selling Products</h5>
            </div>
            <div className="card-body">
              <BarChart data={dataTopSellingProducts} width={350} height={200} margin={{ left: -4, right: -4 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="product" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#82ca9d" radius={5} />
                <LabelList position="insideTop" dataKey="sales" />
              </BarChart>
            </div>
          </div>
        </div>
  
        {/* Average Order Value */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Average Order Value (AOV)</h5>
            </div>
            <div className="card-body">
              <LineChart data={dataAOV} width={350} height={200} margin={{ left: 14, right: 14, top: 10 }}>
                <CartesianGrid strokeDasharray="4 4" />
                <XAxis dataKey="date" tickFormatter={(value) => new Date(value).toLocaleDateString("en-US", { weekday: "short" })} />
                <YAxis />
                <Tooltip />
                <Line dataKey="AOV" stroke="#1f77b4" />
              </LineChart>
            </div>
          </div>
        </div>
  
        {/* Customer Acquisition Cost */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Customer Acquisition Cost (CAC)</h5>
            </div>
            <div className="card-body">
              <LineChart data={dataCAC} width={350} height={200} margin={{ left: 14, right: 14, top: 10 }}>
                <CartesianGrid strokeDasharray="4 4" />
                <XAxis dataKey="date" tickFormatter={(value) => new Date(value).toLocaleDateString("en-US", { weekday: "short" })} />
                <YAxis />
                <Tooltip />
                <Line dataKey="CAC" stroke="#d62728" />
              </LineChart>
            </div>
          </div>
        </div>
  
        {/* Refunds and Returns */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Refunds and Returns</h5>
            </div>
            <div className="card-body">
              <LineChart data={dataRefundsReturns} width={350} height={200} margin={{ left: 14, right: 14, top: 10 }}>
                <CartesianGrid strokeDasharray="4 4" />
                <XAxis dataKey="date" tickFormatter={(value) => new Date(value).toLocaleDateString("en-US", { weekday: "short" })} />
                <YAxis />
                <Tooltip />
                <Line dataKey="refunds" stroke="#ff7300" />
              </LineChart>
            </div>
          </div>
        </div>
  
        {/* Website Traffic */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Website Traffic</h5>
            </div>
            <div className="card-body">
              <LineChart data={dataWebsiteTraffic} width={350} height={200} margin={{ left: 14, right: 14, top: 10 }}>
                <CartesianGrid strokeDasharray="4 4" />
                <XAxis dataKey="date" tickFormatter={(value) => new Date(value).toLocaleDateString("en-US", { weekday: "short" })} />
                <YAxis />
                <Tooltip />
                <Line dataKey="traffic" stroke="#2ca02c" />
              </LineChart>
            </div>
          </div>
        </div>
  
        {/* Sales by Region */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Sales by Region</h5>
            </div>
            <div className="card-body">
              <BarChart data={dataSalesByRegion} width={350} height={200} margin={{ left: -4, right: -4 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="region" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#8884d8" radius={5} />
                <LabelList position="insideTop" dataKey="sales" />
              </BarChart>
            </div>
          </div>
        </div>
  
      </div>
    </div>
  )}