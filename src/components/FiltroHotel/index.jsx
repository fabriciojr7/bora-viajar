import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function FiltroHotel() {
    const [estado, setEstado] = useState('');

    const handleChange = (event) => {
        setEstado(event.target.value);
    };

    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="estado">Estado</InputLabel>
                <Select
                    labelId="estado-label"
                    id="estado"
                    value={estado}
                    label="Estado"
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>São Paulo</MenuItem>
                    <MenuItem value={20}>Mato Grosso do Sul</MenuItem>
                    <MenuItem value={30}>Minas Gerais</MenuItem>
                </Select>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="cidade">Cidade</InputLabel>
                <Select
                    labelId="cidade-label"
                    id="cidade"
                    value={estado}
                    label="Cidade"
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>

        </div>
    );
}