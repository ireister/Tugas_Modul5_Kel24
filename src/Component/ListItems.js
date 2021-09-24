import axios from "axios";
import { Modal } from "antd";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import 'antd/dist/antd.css';
import React, { useEffect, useState} from "react";
import Header from "./Header";
export const ListItemsContext = React.createContext({});

export default function ListItems() {
  const [isModalVisible, setIsModalVisible, listitems] = useState(false);
  const [data, setDb] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };


  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3000/data",
      headers: {
        accept: "/",
      },
    })
      .then((data) => {
        console.log('data',data.data);
        setDb(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ListItemsContext.Provider value={{ listitems }}>
    <Header />
    <>
    <div>
    
            <h1>Daftar Hololive</h1>
          
    </div>
    
      <div className="margin" style={{ marginTop: 10, color: "transparent",
              Width: "100%" }}>
        <Grid
          container
          md={10}
          spacing={5}
          style={{ marginTop: "50px", marginLeft: "0px", marginRight: "3500px" }}
          
        >
          {data.length > 0 && data.map((results, index) => 
             (
              <Grid item key={results.id} md={7}>
                <Modal title="Hololive"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleOk}
                width = {500}
              >
                  <div>
                  <p style={{ fontSize: 18,  fontFamily: 'Time New Roman' }}>Nama : {results.nama}</p>
                <p style={{ fontSize: 16,  fontFamily: 'Time New Roman' }}>Generasi : {results.gen}</p>
                <p style={{ fontSize: 15, fontFamily: 'Time New Roman' }}>Bio : {results.bio}</p>
              </div>
              </Modal>
                <Card>
                    <CardContent>
                      <Typography>{results.nama}</Typography>
                      <Button onClick={showModal} variant="contained" >About</Button>
                    </CardContent>
                </Card>
              </Grid>
            )
          )}
        </Grid>
        
      </div>
    </>
    </ListItemsContext.Provider>

  );
}