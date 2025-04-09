import { useState, useEffect } from 'react'

function App() {
  const [form, setForm] = useState({
    grupo: '',
    subgrupo: '',
    familia: '',
    linha: '',
    dimensoes: '',
    codigoSeq: ''
  })

  const [options, setOptions] = useState({
    grupo: ['MEC', 'ELT', 'PNM'],
    subgrupo: ['EIXO', 'SUP', 'CONEC'],
    familia: ['TRANSP', 'GUIA', 'ESTR'],
    linha: []
  })

  const [cadastrados, setCadastrados] = useState([])

  const API_URL = 'https://script.google.com/macros/s/AKfycbzFLAnDBrGj7LejjIEvGX_v6r1Y1ycNLe5I4gLuQKR-VmfMnVpXrAD51AcmaoVRQMrxGQ/exec'
