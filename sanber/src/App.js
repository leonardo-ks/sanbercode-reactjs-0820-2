import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" style={{border : "1px", borderStyle : "solid", margin : "1%", borderRadius : "10px"}}>
      <h1 style={{textAlign: "center"}}>Form Pembelian Buah</h1>
      <table style={{textAlign: "left"}}>
        <tr>
            <th><label for="nama"><b>Nama Pelanggan</b></label></th>
            <th><input type="text" id="nama" name="nama"></input></th>
        </tr>
        <tr>
            <td></td>
            <td><input type="checkbox" value="Semangka"></input>
                <label for="buah">Semangka</label>
            </td>
        </tr>
        <tr>
            <td></td>
            <td><input type="checkbox" value="Jeruk"></input>
                <label for="buah">Jeruk</label>
            </td>
        </tr>
        <tr>
            <td></td>
            <td><input type="checkbox" value="Nanas"></input>
                <label for="buah">Nanas</label>
            </td>
        </tr>
        <tr>
            <td></td>
            <td><input type="checkbox" value="Salak"></input>
                <label for="buah">Salak</label>
            </td>
        </tr>
        <tr>
            <td><b>Daftar Item</b></td>
            <td><input type="checkbox" value="Anggur"></input>
                <label for="buah">Anggur</label></td>
        </tr>
        <tr>
            <td><input type="submit" value="Kirim" style={{borderRadius: "12px"}}></input></td>
        </tr>
    </table>
      
  </div>
  );
}

export default App;
