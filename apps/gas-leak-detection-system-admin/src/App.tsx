import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { GasLeakAlertList } from "./gasLeakAlert/GasLeakAlertList";
import { GasLeakAlertCreate } from "./gasLeakAlert/GasLeakAlertCreate";
import { GasLeakAlertEdit } from "./gasLeakAlert/GasLeakAlertEdit";
import { GasLeakAlertShow } from "./gasLeakAlert/GasLeakAlertShow";
import { LocationList } from "./location/LocationList";
import { LocationCreate } from "./location/LocationCreate";
import { LocationEdit } from "./location/LocationEdit";
import { LocationShow } from "./location/LocationShow";
import { SensorList } from "./sensor/SensorList";
import { SensorCreate } from "./sensor/SensorCreate";
import { SensorEdit } from "./sensor/SensorEdit";
import { SensorShow } from "./sensor/SensorShow";
import { MaintenanceLogList } from "./maintenanceLog/MaintenanceLogList";
import { MaintenanceLogCreate } from "./maintenanceLog/MaintenanceLogCreate";
import { MaintenanceLogEdit } from "./maintenanceLog/MaintenanceLogEdit";
import { MaintenanceLogShow } from "./maintenanceLog/MaintenanceLogShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"GasLeakDetectionSystem"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="GasLeakAlert"
          list={GasLeakAlertList}
          edit={GasLeakAlertEdit}
          create={GasLeakAlertCreate}
          show={GasLeakAlertShow}
        />
        <Resource
          name="Location"
          list={LocationList}
          edit={LocationEdit}
          create={LocationCreate}
          show={LocationShow}
        />
        <Resource
          name="Sensor"
          list={SensorList}
          edit={SensorEdit}
          create={SensorCreate}
          show={SensorShow}
        />
        <Resource
          name="MaintenanceLog"
          list={MaintenanceLogList}
          edit={MaintenanceLogEdit}
          create={MaintenanceLogCreate}
          show={MaintenanceLogShow}
        />
      </Admin>
    </div>
  );
};

export default App;
