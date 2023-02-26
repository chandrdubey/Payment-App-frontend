import { Button, Table } from "antd";
import axios from "axios";

import { useEffect, useState } from "react";

function Invoices() {
  const [datalist, setList] = useState([]);

  useEffect(() => {
    console.log("Hello", process.env.REACT_APP_BACKEND_URL);
    const response = axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/invoices`)
      .then((res) => {
        console.log(res.data.data.invoices);
        setList(res.data.data.invoices);
      });
  }, []);

  const list = [
    {
      id: "sdasdasdasdasd",
      email: "asdasd@mail.com",
      items: 4,
      total_amount: 23232,
      status: "Pending",
      gatewayPaymentId: "sdasdsadasd",
    },
    {
      id: "sdasdasdasdasd",
      email: "asdasd@mail.com",
      items: 4,
      total_amount: 23232,
      status: "Pending",
      gatewayPaymentId: "sdasdsadasd",
    },
    {
      id: "sdasdasdasdasd",
      email: "asdasd@mail.com",
      items: 4,
      total_amount: 23232,
      status: "Pending",
      gatewayPaymentId: "sdasdsadasd",
    },
    {
      id: "sdasdasdasdasd",
      email: "asdasd@mail.com",
      items: 4,
      total_amount: 23232,
      status: "Pending",
      gatewayPaymentId: "sdasdsadasd",
    },
  ];
  //   name: {
  //     type: String,
  //   },

  //   items: {
  //     type: Number,
  //   },

  //   total_amount: {
  //     type: Number,
  //   },

  //   status: {
  //     type: String,
  //   },
  //   email: {
  //     type: String,
  //   },
  //   gatewayPaymentId: {
  //     type: String,
  //     default: null,
  //   },
  const columns = [
    {
      title: "Invoice Id",
      dataIndex: "_id",
      key: "_id",

      align: "center",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",

      align: "center",
    },
    {
      title: "Gateway Payment Id",
      dataIndex: "gatewayPaymentId",
      key: "gatewayPaymentId",
      align: "center",

      // width: '30%',
    },
    {
      title: "Items",
      key: "items",
      dataIndex: "items",

      align: "center",
    },

    {
      title: "Total Amount",
      dataIndex: "total_amount",
      key: "total_amount",
      align: "center",

      // width: '30%',
    },

    {
      title: "Status",
      dataIndex: "status",
      key: "id",
      align: "center",

      // width: '10%',
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      align: "center",

      // width: '20%',
    },
    {
      title: "Payment At",
      dataIndex: "paymentAt",
      key: "paymentAt",
      align: "center",
      // width: '20%',
    },
    {
      title: "",
      dataIndex: "",
      key: "",
      render: (row) => (
        <Button type="primary" onClick={() => onPayClick(row._id)}>
          Pay Now
        </Button>
      ),
      align: "center",

      // width: '10%',
    },
  ];
  const onPayClick = (id) => {
    console.log("🚀 ~ file: invoice.js:153 ~ onPayClick ~ id:", id);
    const response = axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/payments`, { id })
      .then((res) => {
        window.location.assign(res.data.data.longurl);
        // console.log(res.data);
      });
  };

  return (
    <div className="App">
      <h2>All Invoices</h2>

      <div className="card-body">
        <Table
          columns={columns}
          dataSource={datalist}
          loading={false}
          postion="bottomCenter"
          scroll={{ x: "500" }}
        />
      </div>
    </div>
  );
}

export default Invoices;
