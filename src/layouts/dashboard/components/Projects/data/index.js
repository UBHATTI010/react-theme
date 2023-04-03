/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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
import Tooltip from "@mui/material/Tooltip";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";

// Images
import logoXD from "assets/images/small-logos/logo-xd.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";

export default function data() {
  const avatars = (members) =>
    members.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <MDAvatar
          src={image}
          alt="name"
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { white } }) =>
              `${borderWidth[2]} solid ${white.main}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  const Company = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Businesses", accessor: "companies", width: "45%", align: "left" },
      { Header: "Active Members", accessor: "members", width: "30%", align: "left" },
      { Header: "budget", accessor: "budget", align: "center" },
      // { Header: "completion", accessor: "completion", align: "center" },
    ],

    rows: [
      {
        companies: <Company image={logoXD} name="Testing AI" />,
        members: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            1
          </MDTypography>
        ),
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
       
      },
      {
        companies: <Company image={logoAtlassian} name=" Tetsq" />,
        members: (
          <MDBox display="flex" py={1}>
           2
          </MDBox>
        ),
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
       
      },
    ],
  };
}
