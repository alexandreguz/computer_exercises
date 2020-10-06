





# header

defp retorno_header do

  "34100000         224127816000149                    00061 000000019867 7WEEL BSD FOMENTO MERCANTIL LTDBANCO ITAU S.A.                         2DDMMYYYYHHMMSS000001040
  34100011T0100030 2024127816000149                    00061 000000019867 7WEEL BSD FOMENTO MERCANTIL LTD                                                                                00000001DDMMYYYYDDMMYYYY                                 "

end

# body lote T and lote U

defp body_T do

CÓDIGO DO BANCO "341" ---------> 1 - 3
CÓDIGO DO LOTE  "0001" --------> 4 - 7
TIPO DE REGISTRO "3" -----------> 8
N.º SEQUENCIAL DO REGISTRO NO LOTE "0000X" --------> 9 - 13
SEGMENTO "T" -------------------> 14
BOLETO DDA " " ----------------------> 15
CÓD.DE OCORRÊNCIA "02" --------------> 16 - 17 // "18"
ZEROS  "0" --------------------------> 18
branch "0061" ----------------------> 19 - 22
ZEROS "00000000" --------------------> 23 - 30
account  "19867" ----------------------> 31 - 35
ZEROS "0" ---------------------------> 36
DAC "07" ----------------------> 37
N.º DA CARTEIRA  "109" -----------------------> 38 - 40
payment_slip_number  "XXXXXXXX " ------------------> 41 - 48 // SliceRemessa(40..47)
dac_peyment_slip "X" ----------------------> 49 // SliceRemessa(48)
BRANCOS "        " ----------------------> 50 - 57
ZEROS "0" -----------------------------> 58
Invoice number  "XXXXXXXXXX" ---->  59 -  68 // SliceRemessa(62..71)
BRANCOS   "     "  ---------------------> 69 - 73
due_date "DDMMAAAA" --------------------> 74 81 // SliceRemessa(77..84)
amount "XXXXXXXXXXXXXXX" --------------> 82 - 96 // SliceRemessa(85.99)
ZEROS "000" 97 - 99
AGÊNCIA COBRADORA  "02861" -----------> 100 - 104
DAC "5" --------------------> 105
USO DA EMPRESA blanks - "                         " 106 - 130
ZEROS "00" 131-132
CÓDIGO DE INSCRIÇÃO(CPF, CNPJ) "2" ------> 133
INSCRIÇÃO (CPF, CNPJ)   "XXXXXXXXXXXXXXX" ------------> 134-148 SliceRemessaQ(18..32)
NOME NOME DO PAGADOR  "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" ---------------> 149 - 178 SliceRemessaQ(33..62)
BRANCOS "          " -----------> 179 - 188
ZEROS COMPLEMENTO DE REGISTRO "0000000000" ----------> 189 - 198
TARIFAS/CUSTAS "XXXXXXXXXXXXXXX" ----------> 199 - 213
ERROS "XXXXXXXX" -------------> 214 - 221
CÓD. DE LIQUIDAÇÃO "XX" -------------------> 222 -  223
BRANCOS COMPLEMENTO DE REGISTRO "                 " --------> 224 - 240

end

defp body_U do

  CÓDIGO DO BANCO  "341" -------> 1 -3
  CÓDIGO DO LOTE "0001" ---------------> 4 - 7
  REGISTRO "3" ---------------> 8
  N.º SEQUENCIAL DO REGISTRO "0000X" ----------> 9 - 13
  SEGMENTO "U" ---------------> 14
  BRANCOS " " --------------> 15
  CÓD. DE OCORRÊNCIA "02" ----------> 16 - 17 // "18"
  JUROS/MULTA "00000000000000" ------> 18 - 32
  VLR. DO DESCONTO "00000000000000" -------------> 33 - 47
  VLR. ABATIMENTO "00000000000000" ---------------> 48 - 62
  VALOR IOF "00000000000000" ------------> 63 - 77
  VALOR CREDITADO "XXXXXXXXXXXXXXX" ----------------> 78 - 92
  VALOR CREDITADO "XXXXXXXXXXXXXXX"----------------> 93 - 107
  ZEROS "000000000000000000000000000000" ------> 108 - 137
  Date/Today DMMAAAA -------------> 138 - 145
  Payment day DDMMAAAA -------------> 146 - 153
  OCORRÊNCIA – PAGADOR "0000" --------------> 154 - 157
  DATA OCORRÊNCIA "00000000" --------------> 158 - 165
  VALOR OCORRÊNCIA  "000000000000000"  ---------> 166 - 180
  BRANCOS "                              " ------> 181 - 210
  ZEROS "00000000000000000000000" --------------------> 211 - 233
  BRANCOS COMPLEMENTO DE REGISTRO "       " -------> 234 - 240

end

defp trailer_lote do

  CÓDIGO DO BANCO "341" --------> 1 - 3
  CÓDIGO DO LOTE "0001" -------> 4 - 7
  TIPO DE REGISTRO '5' -------> 8
  BRANCOS "         "  --------------------> 9 - 17
  QTDE. DE REGISTROS "XXXXXX" ---------> 18 - 23
  QTDE. COBR. SIMPLES "XXXXX"----------> 24 - 29
  VLR. COBR.SIMPLES "00000000000080000"-------------------> 30 - 46
  QTDE. COB.VINCULADA "000116" --------------->47 - 52
  VLR. COBR.VINCULADA "00000000464996960"-----------------------> 53 - 69
  ZEROS "0000000000000000000000000000000000000000000000"----> 70 - 115
  AVISO BANCÁRIO "MT13/08L"---> 116 - 123
  BRANCOS "                                                                                                                     " ->124 - 240


end


defp  do



CÓDIGO DO BANCO  "341" ---------> 1 - 3
CÓDIGO DO LOTE LOTE DE SERVIÇO "9999" -------> 4 - 7
REGISTRO "9" -------------> 8
BRANCOS "         " --------> 9 17
TOTAL DE LOTES "000001000" 18 - 23
TOTAL DE REGISTROS "000036" -------> 24 29
ZEROS COMPLEMENTO DE REGISTRO "000000" 30 - 35
BRANCOS "                                                                                                                                                                                                             " ---->36 240

end
