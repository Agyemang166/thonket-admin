import React from 'react';
import {
  Button,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

const Orders = () => {
  const [tabValue, setTabValue] = React.useState('all');
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <div className="flex items-center">
        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab label="All" value="all" />
          <Tab label="On-Route" value="On-Route" />
          <Tab label="Draft" value="draft" />
          <Tab label="Archived" value="archived" className="hidden sm:flex" />
        </Tabs>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="outlined" size="small" className="h-8 gap-1">
            <span className="sr-only">Filter</span>
            Filter
          </Button>
          <Button size="small" variant="outlined" className="h-8 gap-1">
            <span className="sr-only">Export</span>
            Export
          </Button>
          <Button size="small" className="h-8 gap-1">
            <span className="sr-only">Add Product</span>
            Add Product
          </Button>
        </div>
      </div>
      {tabValue === 'all' && (
        <div className="bg-white rounded-lg shadow-md p-4">
          <Typography variant="h6">Product Overview</Typography>
          <Typography variant="body2" className="mb-4">
            Review and manage your products efficiently.
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="hidden w-[100px] sm:table-cell">
                  <span className="sr-only">Image</span>
                </TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Status</TableCell>
                <TableCell className="hidden md:table-cell">Price</TableCell>
                <TableCell className="hidden md:table-cell">Total Sales</TableCell>
                <TableCell className="hidden md:table-cell">Ordered At</TableCell>
                <TableCell>
                  <span className="sr-only">Actions</span>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[
                {
                  name: 'Laser Lemonade Machine',
                  status: 'Draft',
                  price: '$499.99',
                  sales: 25,
                  createdAt: '2023-07-12 10:42 AM',
                },
                {
                  name: 'Hypernova Headphones',
                  status: 'On-Route',
                  price: '$129.99',
                  sales: 100,
                  createdAt: '2023-10-18 03:21 PM',
                },
                {
                  name: 'AeroGlow Desk Lamp',
                  status: 'On-Route',
                  price: '$39.99',
                  sales: 50,
                  createdAt: '2023-11-29 08:15 AM',
                },
                {
                  name: 'Laser Lemonade Machine',
                  status: 'Draft',
                  price: '$499.99',
                  sales: 25,
                  createdAt: '2023-07-12 10:42 AM',
                },
              ].map((product, index) => (
                <TableRow key={index}>
                  <TableCell className="hidden sm:table-cell">
                    <img
                      alt="Product"
                      className="aspect-square rounded-md object-cover"
                      height="64"
                      src="/placeholder.svg"
                      width="64"
                    />
                  </TableCell>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>
                    <span className={`badge ${product.status === 'On-Route' ? 'bg-green-500' : 'bg-gray-500'}`}>
                      {product.status}
                    </span>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">{product.price}</TableCell>
                  <TableCell className="hidden md:table-cell">{product.sales}</TableCell>
                  <TableCell className="hidden md:table-cell">{product.createdAt}</TableCell>
                  <TableCell>
                    <Button size="small" variant="text" onClick={handleMenuClick}>
                      Actions
                    </Button>
                    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                      <MenuItem onClick={handleMenuClose}>Edit</MenuItem>
                      <MenuItem onClick={handleMenuClose}>Delete</MenuItem>
                    </Menu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="text-xs text-gray-500">
            Showing <strong>1-10</strong> of <strong>32</strong> products
          </div>
        </div>
      )}
    </main>
  );
};

export default Orders;
