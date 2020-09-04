import React from 'react';

class Tugas9 extends React.Component {
    render(){
        return (
            <div className="App" style={{border: "1px solid black", margin : "auto", borderRadius : "10px", alignItems : "center", width : "50%"}}>
            <h1 style = {{textAlign : "center", margin : "auto"}}>Form Pembelian Buah</h1>
            <table style = {{margin: "auto"}}>
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
}

export default Tugas9;