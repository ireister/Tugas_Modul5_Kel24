import React, { useContext } from "react";
import { ListItemsContext } from "./ListItems";

export default function Header() {
    const { listitems } = useContext(ListItemsContext);
  
    return (
      <div>
        <div>
            <center>
            <h1>Tugas Modul 5 Kelompok 24</h1>
            </center>
        </div>
        <hr />
        <br></br>
      </div>
    );
  }