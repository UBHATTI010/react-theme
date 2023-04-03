/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
// import OrdersOverview from "layouts/dashboard/components/OrdersOverview";

import React, { useState, useEffect } from "react";


function Dashboard() {
  const { sales, tasks } = reportsLineChartData;
  const [activeUsers, setActiveUsers] = useState(100);
  const [totalJobs, setTotalJobs] = useState(100);
  const [totalUsers, setTotalUsers] = useState(100);
  const [totalBusiness, setTotalBusiness] = useState(100);


  // START - /active/users calling here
  const requestOptions = {
    method: "POST",
    mode: "cors",
  };
  useEffect(() => {
    fetch("http://127.0.0.1:5000/active/users", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log("data: ", data[0]["count(*)"]);
          setActiveUsers(data[0]["count(*)"])
        })
        .catch((err) => {
          console.log("err.message: ", err.message);
        });
   }, []); 
  // END - /active/users calling here

  // START - /total/jobs calling here

  useEffect(() => {
    fetch("http://127.0.0.1:5000/total/jobs", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log("data: ", data[0]["count(*)"]);
          setTotalJobs(data[0]["count(*)"])
        })
        .catch((err) => {
          console.log("err.message: ", err.message);
        });
   }, []);

  // END - /total/jobs calling here


   // START - /total/jobs calling here

   useEffect(() => {
    fetch("http://127.0.0.1:5000/total/users", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log("data: ", data[0]["count(*)"]);
          setTotalUsers(data[0]["count(*)"])
        })
        .catch((err) => {
          console.log("err.message: ", err.message);
        });
   }, []);

  // END - /total/jobs calling here


 // START - /total/jobs calling here

 useEffect(() => {
  fetch("http://127.0.0.1:5000/total/business", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log("data: ", data[0]["count(*)"]);
        setTotalBusiness(data[0]["count(*)"])
      })
      .catch((err) => {
        console.log("err.message: ", err.message);
      });
 }, []);

// END - /total/jobs calling here 



  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Total Jobs(30 Days)"
                count={totalJobs}
                percentage={{
                   color: "success",
                  amount: "",
                  label: "Just Updated",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title=" Users"
                count={totalUsers}
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Total Users",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title="Business"
                count={totalBusiness}
                percentage={{
                   color: "success",
                  amount: "",
                  label: "Total Business",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="person_add"
                title="Active Users"
                count= {activeUsers}
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="website views"
                  description="Last Campaign Performance"
                  date="campaign sent 2 days ago"
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="daily sales"
                  description={
                    <>
                      (<strong>+15%</strong>) increase in today sales.
                    </>
                  }
                  date="updated 4 min ago"
                  chart={sales}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="completed tasks"
                  description="Last Campaign Performance"
                  date="just updated"
                  chart={tasks}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              {/* <OrdersOverview /> */}
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
