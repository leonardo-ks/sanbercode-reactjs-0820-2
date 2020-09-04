import React from 'react';
import dataHargaBuah from './buah/buah';
class Tugas10 extends React.Component {
    render(){
        return (
            <div className="App" style={{textAlign : "center"}}>
            <h1 style={{textAlign: "center"}}>Tabel Harga Buah</h1>
                <table style={{border:"1px", padding : "10px", margin : "auto", width : "50%"}}>
                    <thead style={{textAlign: "center", backgroundColor: "grey"}}>
                        <tr>
                            <th><b>Nama</b></th>
                            <th><b>Harga</b></th>
                            <th><b>Berat</b></th>
                        </tr>
                    </thead>
                    <tbody style={{textAlign: "left", backgroundColor: "chocolate"}}>
                        {dataHargaBuah.map(el=>{
                            return (
                                <tr>
                                    <td>{el.nama}</td>
                                    <td>{el.harga}</td>
                                    <td>{el.berat/1000 + " kg"}</td>
                                </tr>
                            )
                        }
                    )
                }   
                    </tbody>
                </table>    
            </div>
        );
    }
}
export default Tugas10;