const pecas = [
  {
    id: 1,
    nomePeca: "APFD-1ª Testemunha (Art. 304 do CPP)",
    htmlContent: `
            <p style="text-align: center;"><strong>AUTO DE PRIS&Atilde;O EM FLAGRANTE DELITO<br /> (Art. 304 do CPP)</strong></p>
            <p style="text-align: center;"><strong>&nbsp;</strong></p>
            <p>Em seguida, passou a Autoridade a inquirir as testemunhas na forma que se segue:</p>
            <p style="text-align: justify;"><strong>PRIMEIRA TESTEMUNHA</strong>:&nbsp;{qualificacao_da_primeira_testemunha}. Aos costumes, disse _______________. Testemunha compromissada na forma da lei, advertida das penas cominadas ao falso testemunho, prometeu dizer a verdade do que soubesse e lhe fosse perguntado. Inquirida pela Autoridade passou a declarar&nbsp;QUE,&nbsp;___________________. Nada mais disse nem lhe foi perguntado. Lido e achado conforme, determinou a Autoridade que fosse encerrado o presente Termo, o qual assina juntamente com a Testemunha e comigo Escriv&atilde;o que digitei.</p>
            <p>&nbsp;</p>
            <p>AUTORIDADE POLICIAL: __________________________________________________________</p>
            <p>1&ordf; TESTEMUNHA: ________________________________________________________________</p>
            <p>ESCRIV&Atilde;O(&Atilde;): _______________________________________________________________________</p>
            <p>&nbsp;</p>
    `,
    ativo: true,
    tags: ["primeira_testemunha"],
  },
  {
    id: 2,
    nomePeca: "APFD-2ª Testemunha (Art. 304 do CPP)",
    htmlContent: `
            <p style="text-align: center;"><strong>AUTO DE PRIS&Atilde;O EM FLAGRANTE DELITO</strong><br /> (Art. 304 do CPP)</p>
            <p>&nbsp;</p>
            <p style="text-align: justify;"><strong>SEGUNDA TESTEMUNHA:&nbsp;{qualificacao_da_segunda_testemunha}</strong>. Testemunha compromissada na forma da lei, advertida das penas cominadas ao falso testemunho, prometeu dizer a verdade do que soubesse e lhe fosse perguntado. Inquirida pela Autoridade passou a declarar&nbsp;<strong>QUE,</strong>&nbsp;___________________. Nada mais disse nem lhe foi perguntado. Lido e achado conforme, determinou a Autoridade que fosse encerrado o presente Termo, o qual assina juntamente com a Testemunha e comigo Escriv&atilde;o que digitei.</p>
            <p>&nbsp;</p>
            <p>AUTORIDADE POLICIAL: __________________________________________________________</p>
            <p>2&ordf; TESTEMUNHA: ________________________________________________________________</p>
            <p>ESCRIV&Atilde;O(&Atilde;): _______________________________________________________________________</p>
            <p>&nbsp;</p>
           `,
    ativo: true,
    tags: ["segunda_testemunha"],
  },
  {
    id: 3,
    nomePeca: "APFD-Autor (Art. 304 do CPP)",
    htmlContent: `
            <p style="text-align: center;"><strong>AUTO DE PRIS&Atilde;O EM FLAGRANTE DELITO</strong><br /> (Art. 304 do CPP)</p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">Prosseguindo, passou a Autoridade &agrave; qualifica&ccedil;&atilde;o do&nbsp;<strong>CONDUZIDO(A):</strong>&nbsp;{qualificacao_completa_do_imputado}, sabendo ler e escrever, o(a) qual depois de cientificado(a) das imputa&ccedil;&otilde;es que lhe eram feitas e dos direitos assegurados pelo Art. 5&ordm;, caput e Incs. LXI, LXII, LXIII, LXIV, LXV e LXVI, da Constitui&ccedil;&atilde;o Federal, do respeito &agrave; sua integridade f&iacute;sica e moral, de n&atilde;o ser preso sen&atilde;o em flagrante delito ou por ordem escrita e fundamentada de autoridade judici&aacute;ria competente, de ter sua pris&atilde;o e o local onde se encontre comunicados, imediatamente, ao juiz competente e &agrave; sua fam&iacute;lia, ou &agrave; pessoa por ele indicada, de permanecer calado, sendo-lhe assegurada a assist&ecirc;ncia da fam&iacute;lia e de advogado e a identifica&ccedil;&atilde;o dos respons&aacute;veis por sua pris&atilde;o ou por seu interrogat&oacute;rio policial, expressou a vontade de que sua pris&atilde;o seja comunicada &agrave; pessoa de {nome_da_pessoa_da_familia_do_preso_que_vai_receber_a_comunicacao}. Interrogado na forma do Art. 187, &sect;&sect; 1&ordm; e 2&ordm; do C&oacute;digo de Processo Penal, RESPONDEU:&nbsp;<strong>QUE,</strong>&nbsp;______. Nada mais disse, nem lhe foi perguntado. Depois de lido e achado conforme, determinou a Autoridade fosse encerrado o presente Interrogat&oacute;rio, assinando-o juntamente com o(a) Conduzido(a) e, comigo, Escriv&atilde;o(&atilde;), que o digitei.</p>
            <p>&nbsp;</p>
            <p>AUTORIDADE POLICIAL: __________________________________________________________</p>
            <p>CONDUZIDO(A): ___________________________________________________________________</p>
            <p>ESCRIV&Atilde;O(&Atilde;): _______________________________________________________________________</p>
            <p>&nbsp;</p>
    `,
    ativo: true,
    tags: ["autuados"],
  },
  {
    id: 4,
    nomePeca: "APFD-Certidão de Assinaturas",
    htmlContent: `
            <p style="text-align: center;"><strong>CERTID&Atilde;O</strong><br />&nbsp;</p>
            <p style="text-align: right;">{cidade_onde_o_procedimento_esta_sendo_realizado}, {data_mes_e_ano}</p>
            <p>Refer&ecirc;ncia:&nbsp;<strong>{tipo_de_procedimento}&nbsp;n&ordm;&nbsp;{numero_do_procedimento}</strong></p>
            <p><strong>BOE n&ordm;&nbsp;{numero_do_bo}</strong></p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">Certifico que os atos cartor&aacute;rios de investiga&ccedil;&atilde;o policial ser&atilde;o elaborados eletronicamente no Sistema PCPE Virtual, Sistema Oficial de Pol&iacute;cia Judici&aacute;ria de Pernambuco, os envolvidos passam a firmar a ci&ecirc;ncia e anu&ecirc;ncia dos conte&uacute;dos das pe&ccedil;as produzidas por meio da presente certid&atilde;o. Registra-se, ainda , que a data e hor&aacute;rio de produ&ccedil;&atilde;o de cada documento &eacute; audit&aacute;vel em sistema.</p>
            <p><strong>QUALIFICA&Ccedil;&Atilde;O DOS ENVOLVIDOS</strong></p>
            <p style="text-align: justify;"><strong>{qualificacao_do_condutor}.</strong></p>
            <p style="text-align: justify;"><strong>{qualificacao_da_vitima}.</strong></p>
            <p style="text-align: justify;"><strong>{qualificacao_completa_do_imputado}</strong></p>
            <p style="text-align: justify;"><strong>{qualificacao_da_primeira_testemunha}</strong></p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">DECLARO que li, estou de acordo com o conte&uacute;do e presenciei a assinatura eletr&ocirc;nica do meu Termo de Depoimento e do Termo de Apreens&atilde;o.</p>
            <p>Nome por extenso:&nbsp; __________________________________________</p>
            <p>Assinatura: _______________________&nbsp; Data/Hora&nbsp;___/__/___ ___:___</p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">DECLARO que li, estou de acordo com o conte&uacute;do e presenciei a assinatura eletr&ocirc;nica do meu Termo de Depoimento e do Termo de Apreens&atilde;o.</p>
            <p>Nome por extenso:&nbsp; __________________________________________</p>
            <p>Assinatura: _______________________&nbsp; Data/Hora&nbsp;___/__/___ ___:___</p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">DECLARO que li, estou de acordo com o conte&uacute;do e presenciei a assinatura eletr&ocirc;nica do meu Termo de Depoimento e do Termo de Apreens&atilde;o.</p>
            <p>Nome por extenso:&nbsp; __________________________________________</p>
            <p>Assinatura: _______________________&nbsp; Data/Hora&nbsp;___/__/___ ___:___</p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">DECLARO que li, estou de acordo com o conte&uacute;do e presenciei a assinatura eletr&ocirc;nica do meu Termo de Depoimento e do Termo de Apreens&atilde;o.</p>
            <p>Nome por extenso:&nbsp; __________________________________________</p>
            <p>Assinatura: _______________________&nbsp; Data/Hora&nbsp;___/__/___ ___:___</p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">CONDUZIDO: DECLARO que fui cientificado de minhas Garantias Constitucionais antes da realiza&ccedil;&atilde;o do Interrogat&oacute;rio, bem como li, estou de acordo do conte&uacute;do e presenciei a assinatura eletr&ocirc;nica do meu Termo de Qualifica&ccedil;&atilde;o e Interrogat&oacute;rio, do Termo de Apreens&atilde;o, do Boletim Individual Criminal e do Boletim de Vida Pregressa , e que recebi a c&oacute;pia da Nota de Culpa.</p>
            <p>Nome por extenso:&nbsp; __________________________________________</p>
            <p>Assinatura: _______________________&nbsp; Data/Hora&nbsp;___/__/___ ___:___</p>
            <p style="text-align: justify;"><br />ADVOGADO: DECLARO que li, estou ciente de acordo com o conte&uacute;do e presenciei a assinatura eletr&ocirc;nica do Termo de Qualifica&ccedil;&atilde;o Interrogat&oacute;rio de meus clientes.</p>
            <p>Nome por extenso:&nbsp; __________________________________________</p>
            <p>Assinatura: _______________________&nbsp; Data/Hora&nbsp;___/__/___ ___:___</p>
            <p>&nbsp;</p>
            `,
    ativo: true,
    tags: [
      "condutores",
      "vitimas",
      "autuados",
      "primeira_testemunha",
      "segunda_testemunha",
    ],
  },
  {
    id: 5,
    nomePeca: "APFD-Certidão de Fiança",
    htmlContent: `
            <p style="text-align: center;"><strong>CERTID&Atilde;O DE FIAN&Ccedil;A</strong><br /> (Art. 329 do CPP)</p>
            <p style="text-align: center;">&nbsp;</p>
            <p style="text-align: justify;">Eu, {nome_do_escrivao}, Escriv&atilde;o(&atilde;) de Pol&iacute;cia, lotado(a) nesta Delegacia de Pol&iacute;cia,</p>
            <p style="text-align: justify;"><strong>CERTIFICO</strong>, cumprindo determina&ccedil;&atilde;o da Autoridade Policial, para fins de instruir Inqu&eacute;rito Policial iniciado por Auto de Pris&atilde;o em Flagrante Delito, que consta registrado em livro de FIAN&Ccedil;A pr&oacute;prio deste &oacute;rg&atilde;o Policial, &agrave;s fls. _______ o TERMO DE FIAN&Ccedil;A de seguinte teor: Aos {data_mes_e_ano}, nesta Cidade de {cidade_onde_o_procedimento_esta_sendo_realizado}, Estado de Pernambuco, no Cart&oacute;rio desta DELEGACIA DE POL&Iacute;CIA onde presente se encontrava o(a) Bel(a). {nome_do_delegado}, respectivo(a) Delegado(a), comigo, Escriv&atilde;o(&atilde;) de seu cargo, ao final assinado(a), a&iacute; compareceu: <strong>{qualificacao_completa_do_imputado}</strong>, j&aacute; qualificado no Auto de Pris&atilde;o em Flagrante Delito em que foi indiciado por infra&ccedil;&atilde;o ao&nbsp;<strong>&nbsp;{incidencia_penal}</strong>, a quem a Autoridade, independentemente de Requerimento, concedeu-lhe Fian&ccedil;a para que, em liberdade, possa defender-se das imputa&ccedil;&otilde;es que lhe s&atilde;o feitas, arbitrando-a em&nbsp;<strong>R$ {valor_da_fianca}</strong>, uma vez que o il&iacute;cito em quest&atilde;o &eacute; punido com pena que o beneficia com direito a liberdade provis&oacute;ria, mediante presta&ccedil;&atilde;o de cau&ccedil;&atilde;o legal, ficando o afian&ccedil;ado, desde j&aacute;, ciente das obriga&ccedil;&otilde;es previstas nos Arts. 327 e 328, do C&oacute;digo de Processo Penal que ter&aacute; de cumprir. Nada mais havendo a constar, mandou a Autoridade encerrar o presente Termo, que o assina com o Afian&ccedil;ado e, comigo, Escriv&atilde;(o), que o escrevi. Dada e passada nesta Cidade de {cidade_onde_o_procedimento_esta_sendo_realizado}, Estado de Pernambuco,&nbsp;Aos {data_mes_e_ano}.</p>
            <p>Eu, __________________________________ {nome_do_escrivao}, Escriv&atilde;o(&atilde;) a digitei e subscrevi.</p>
            <p>&nbsp;</p>
            `,
  },
  {
    id: 6,
    nomePeca: "APFD-Comunica Defensor Público (com fiança/+ 1 autor)",
    htmlContent: `
            <p style="text-align: right;"><strong>{cidade_onde_o_procedimento_esta_sendo_realizado}, {data_mes_e_ano}</strong></p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p><br /> Ref.: {numero_do_procedimento}</p>
            <p>&nbsp;</p>
            <p><strong>A SUA EXCEL&Ecirc;NCIA O(A) SENHOR(A),</strong></p>
            <p><strong>DEFENSORIA P&Uacute;BLICA DO ESTADO DE PERNAMBUCO</strong></p>
            <p>&nbsp;</p>
            <p>Senhor(a) Defensor(a),</p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">Levo ao conhecimento de V.Ex.&ordf; que foi preso(a) em flagrante delito a(s) pessoa(s) de: <strong>{qualificacao_completa_do_imputado}</strong>, por ter infringido o(s)&nbsp;<strong>{incidencia_penal}</strong>, fato ocorrido no dia {data_e_hora_do_fato}, na(o) {endereco_onde_ocorreu_o_fato}, de acordo com o Boletim de Ocorr&ecirc;ncia de n&ordm; {numero_do_bo}, tendo como v&iacute;tima(s): <strong>{nome_da_vitima}</strong>.</p>
            <p style="text-align: justify;">Ap&oacute;s as formalidades legais o(a) autuado(a) foi posto em liberdade condicional, mediante recolhimento de fian&ccedil;a no valor de R$&nbsp;<strong>{valor_da_fianca}</strong>.</p>
            <p>Em anexo, seguem c&oacute;pias do procedimento lavrado.</p>
            <p>Respeitosamente,</p>
            <p style="text-align: center;">&nbsp;</p>
            <p style="text-align: center;"><strong>{nome_do_delegado}</strong><br /> Delegado(a) de Pol&iacute;cia</p>
            <p>&nbsp;</p>
    `,
    ativo: true,
    tags: ["autuados", "fianca"],
  },
  {
    id: 7,
    nomePeca: "APFD-Comunica Defensor Público (com fiança/1 autor)",
    htmlContent: `
            <p style="text-align: right;"><strong>{cidade_onde_o_procedimento_esta_sendo_realizado}, {data_mes_e_ano}</strong></p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p><br /> Ref.: {numero_do_procedimento}</p>
            <p>&nbsp;</p>
            <p><strong>A SUA EXCEL&Ecirc;NCIA O(A) SENHOR(A),</strong></p>
            <p><strong>DEFENSORIA P&Uacute;BLICA DO ESTADO DE PERNAMBUCO</strong></p>
            <p>&nbsp;</p>
            <p>Senhor(a) Defensor(a),</p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">Levo ao conhecimento de V.Ex.&ordf; que foi preso(a) em flagrante delito a(s) pessoa(s) de: <strong>{qualificacao_completa_do_imputado}</strong>, por ter infringido o(s)&nbsp;<strong>{incidencia_penal}</strong>, fato ocorrido no dia {data_e_hora_do_fato}, na(o) {endereco_onde_ocorreu_o_fato}, de acordo com o Boletim de Ocorr&ecirc;ncia de n&ordm; {numero_do_bo}, tendo como v&iacute;tima(s): <strong>{nome_da_vitima}</strong>.</p>
            <p style="text-align: justify;">Ap&oacute;s as formalidades legais o(a) autuado(a) foi posto em liberdade condicional, mediante recolhimento de fian&ccedil;a no valor de R$&nbsp;<strong>{valor_da_fianca}</strong>.</p>
            <p>Em anexo, seguem c&oacute;pias do procedimento lavrado.</p>
            <p>Respeitosamente,</p>
            <p style="text-align: center;">&nbsp;</p>
            <p style="text-align: center;"><strong>{nome_do_delegado}</strong><br /> Delegado(a) de Pol&iacute;cia</p>
            <p>&nbsp;</p>
    `,
    ativo: true,
    tags: ["autuados", "fianca"],
  },
  {
    id: 8,
    nomePeca: "APFD-Comunica Defensor Público (sem fiança/+ 1 autor)",
    htmlContent: `
            <p style="text-align: right;"><strong>{cidade_onde_o_procedimento_esta_sendo_realizado}, {data_mes_e_ano}</strong></p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>Ref.: {numero_do_procedimento}</p>
            <p>&nbsp;</p>
            <p><strong>A SUA EXCEL&Ecirc;NCIA O(A) SENHOR(A),</strong></p>
            <p><strong>DEFENSORIA P&Uacute;BLICA DO ESTADO DE PERNAMBUCO</strong></p>
            <p><strong>&nbsp;</strong></p>
            <p>&nbsp;</p>
            <p>Senhor(a) Defensor(a),</p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">Levo ao conhecimento de V.Ex.&ordf; que foi preso(a) em flagrante delito a(s) pessoa(s) de <strong>{qualificacao_completa_do_imputado}</strong>, por ter infringido o(s) {incidencia_penal}, fato ocorrido no dia {data_e_hora_do_fato}, na(o) {endereco_onde_ocorreu_o_fato}, de acordo com o Boletim de Ocorr&ecirc;ncia de n&ordm; {numero_do_bo}, tendo como v&iacute;tima(s) <strong>{qualificacao_da_vitima}</strong>.</p>
            <p style="text-align: justify;">Ap&oacute;s as formalidades legais, o(a) autuado(a) foi entregue ao N&uacute;cleo da Pol&iacute;cia Militar do Tribunal de Justi&ccedil;a de Pernambuco a fim de ser apresentado(a) na Audi&ecirc;ncia de Cust&oacute;dia.</p>
            <p style="text-align: justify;">Outrossim, solicito a Vossa Excel&ecirc;ncia que seja encaminhado &agrave; <strong>{delegacia_para_onde_o_procedimento_sera_remetido}</strong>, atrav&eacute;s de of&iacute;cio, o resultado da referida audi&ecirc;ncia com a situa&ccedil;&atilde;o atualizada do(a) autuado(a), para que o Delegado presidente do Inqu&eacute;rito Policial possa cumprir os prazos processuais.</p>
            <p>Em anexo, seguem c&oacute;pias do procedimento lavrado.</p>
            <p style="text-align: center;">Respeitosamente,</p>
            <p style="text-align: center;">&nbsp;</p>
            <p style="text-align: center;">{nome_do_delegado}<br /> Delegado(a) de Pol&iacute;cia</p>
        `,
    ativo: true,
    tags: ["autuados", "delegacia_afeto"],
  },
  {
    id: 9,
    nomePeca: "APFD-Comunica Defensor Público (sem fiança/1 autor)",
    htmlContent: `
            <p style="text-align: right;"><strong>{cidade_onde_o_procedimento_esta_sendo_realizado}, {data_mes_e_ano}</strong></p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>Ref.: {numero_do_procedimento}</p>
            <p>&nbsp;</p>
            <p><strong>A SUA EXCEL&Ecirc;NCIA O(A) SENHOR(A),</strong></p>
            <p><strong>DEFENSORIA P&Uacute;BLICA DO ESTADO DE PERNAMBUCO</strong></p>
            <p><strong>&nbsp;</strong></p>
            <p>&nbsp;</p>
            <p>Senhor(a) Defensor(a),</p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">Levo ao conhecimento de V.Ex.&ordf; que foi preso(a) em flagrante delito a(s) pessoa(s) de <strong>{qualificacao_completa_do_imputado}</strong>, por ter infringido o(s) {incidencia_penal}, fato ocorrido no dia {data_e_hora_do_fato}, na(o) {endereco_onde_ocorreu_o_fato}, de acordo com o Boletim de Ocorr&ecirc;ncia de n&ordm; {numero_do_bo}, tendo como v&iacute;tima(s) <strong>{qualificacao_da_vitima}</strong>.</p>
            <p style="text-align: justify;">Ap&oacute;s as formalidades legais, o(a) autuado(a) foi entregue ao N&uacute;cleo da Pol&iacute;cia Militar do Tribunal de Justi&ccedil;a de Pernambuco a fim de ser apresentado(a) na Audi&ecirc;ncia de Cust&oacute;dia.</p>
            <p style="text-align: justify;">Outrossim, solicito a Vossa Excel&ecirc;ncia que seja encaminhado &agrave; <strong>{delegacia_para_onde_o_procedimento_sera_remetido}</strong>, atrav&eacute;s de of&iacute;cio, o resultado da referida audi&ecirc;ncia com a situa&ccedil;&atilde;o atualizada do(a) autuado(a), para que o Delegado presidente do Inqu&eacute;rito Policial possa cumprir os prazos processuais.</p>
            <p>Em anexo, seguem c&oacute;pias do procedimento lavrado.</p>
            <p style="text-align: center;">Respeitosamente,</p>
            <p style="text-align: center;">&nbsp;</p>
            <p style="text-align: center;">{nome_do_delegado}<br /> Delegado(a) de Pol&iacute;cia</p>
        `,
    ativo: true,
    tags: ["autuados", "delegacia_afeto"],
  },
  {
    id: 10,
    nomePeca: "APFD-Comunica Juiz (com fiança/+ 1 autor)",
    htmlContent: `
            <p style="text-align: right;"><strong>{cidade_onde_o_procedimento_esta_sendo_realizado}, {data_mes_e_ano}</strong></p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p><br /> Ref.: {numero_do_procedimento}</p>
            <p>&nbsp;</p>
            <p><strong>A SUA EXCEL&Ecirc;NCIA O(A) SENHOR(A),</strong></p>
            <p><br /> <strong>JUIZ(A) DE DIREITO DO ESTADO DE PERNAMBUCO, </strong></p>
            <p><strong>PROMOTOR DE JUSTI&Ccedil;A DO ESTADO DE PERNAMBUCO </strong></p>
            <p><strong>DEFENSORIA P&Uacute;BLICA DO ESTADO DE PERNAMBUCO</strong></p>
            <p>&nbsp;</p>
            <p>Senhor(a) Juiz(a), Promotor(a) e Defensor(a),</p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">Levo ao conhecimento de V.Ex.&ordf; que foi preso(a) em flagrante delito a(s) pessoa(s) de: <strong>{qualificacao_completa_do_imputado}</strong>, por ter infringido o(s)&nbsp;<strong>{incidencia_penal}</strong>, fato ocorrido no dia {data_e_hora_do_fato}, na(o) {endereco_onde_ocorreu_o_fato}, de acordo com o Boletim de Ocorr&ecirc;ncia de n&ordm; {numero_do_bo}, tendo como v&iacute;tima(s): <strong>{nome_da_vitima}</strong>.</p>
            <p style="text-align: justify;">Ap&oacute;s as formalidades legais o(a) autuado(a) foi posto em liberdade condicional, mediante recolhimento de fian&ccedil;a no valor de R$&nbsp;<strong>{valor_da_fianca}</strong>.</p>
            <p>Em anexo, seguem c&oacute;pias do procedimento lavrado.</p>
            <p>Respeitosamente,</p>
            <p style="text-align: center;">&nbsp;</p>
            <p style="text-align: center;"><strong>{nome_do_delegado}</strong><br /> Delegado(a) de Pol&iacute;cia</p>
            <p>&nbsp;</p>
    `,
    ativo: true,
    tags: ["autuados", "vitimas", "fianca"],
  },
  {
    id: 11,
    nomePeca: "APFD-Comunica Juiz (com fiança/1 autor)",
    htmlContent: `
            <p style="text-align: right;"><strong>{cidade_onde_o_procedimento_esta_sendo_realizado}, {data_mes_e_ano}</strong></p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p><br /> Ref.: {numero_do_procedimento}</p>
            <p>&nbsp;</p>
            <p><strong>A SUA EXCEL&Ecirc;NCIA O(A) SENHOR(A),</strong></p>
            <p><br /> <strong>JUIZ(A) DE DIREITO DO ESTADO DE PERNAMBUCO, </strong></p>
            <p><strong>PROMOTOR DE JUSTI&Ccedil;A DO ESTADO DE PERNAMBUCO </strong></p>
            <p><strong>DEFENSORIA P&Uacute;BLICA DO ESTADO DE PERNAMBUCO</strong></p>
            <p>&nbsp;</p>
            <p>Senhor(a) Juiz(a), Promotor(a) e Defensor(a),</p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">Levo ao conhecimento de V.Ex.&ordf; que foi preso(a) em flagrante delito a(s) pessoa(s) de: <strong>{qualificacao_completa_do_imputado}</strong>, por ter infringido o(s)&nbsp;<strong>{incidencia_penal}</strong>, fato ocorrido no dia {data_e_hora_do_fato}, na(o) {endereco_onde_ocorreu_o_fato}, de acordo com o Boletim de Ocorr&ecirc;ncia de n&ordm; {numero_do_bo}, tendo como v&iacute;tima(s): <strong>{nome_da_vitima}</strong>.</p>
            <p style="text-align: justify;">Ap&oacute;s as formalidades legais o(a) autuado(a) foi posto em liberdade condicional, mediante recolhimento de fian&ccedil;a no valor de R$&nbsp;<strong>{valor_da_fianca}</strong>.</p>
            <p>Em anexo, seguem c&oacute;pias do procedimento lavrado.</p>
            <p>Respeitosamente,</p>
            <p style="text-align: center;">&nbsp;</p>
            <p style="text-align: center;"><strong>{nome_do_delegado}</strong><br /> Delegado(a) de Pol&iacute;cia</p>
            <p>&nbsp;</p>
    `,
    ativo: true,
    tags: ["autuados", "vitimas", "fianca"],
  },
  {
    id: 12,
    nomePeca: "APFD-Comunica Juiz (sem fiança/+ 1 autor)",
    htmlContent: `
            <p style="text-align: right;"><strong>{cidade_onde_o_procedimento_esta_sendo_realizado}, {data_mes_e_ano}</strong></p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>Ref.: {numero_do_procedimento}</p>
            <p>&nbsp;</p>
            <p><strong>A SUA EXCEL&Ecirc;NCIA O(A) SENHOR(A),</strong></p>
            <p><strong>JUIZ(A) DE DIREITO DO ESTADO DE PERNAMBUCO</strong></p>
            <p><strong>PROMOTOR DE JUSTI&Ccedil;A DO ESTADO DE PERNAMBUCO</strong></p>
            <p><strong>DEFENSORIA P&Uacute;BLICA DO ESTADO DE PERNAMBUCO</strong></p>
            <p><strong>&nbsp;</strong></p>
            <p>&nbsp;</p>
            <p>Senhor(a) Juiz(a), Promotor(a) e Defensor(a),</p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">Levo ao conhecimento de V.Ex.&ordf; que foi preso(a) em flagrante delito a(s) pessoa(s) de <strong>{qualificacao_completa_do_imputado}</strong>, por ter infringido o(s) {incidencia_penal}, fato ocorrido no dia {data_e_hora_do_fato}, na(o) {endereco_onde_ocorreu_o_fato}, de acordo com o Boletim de Ocorr&ecirc;ncia de n&ordm; {numero_do_bo}, tendo como v&iacute;tima(s) <strong>{qualificacao_da_vitima}</strong>.</p>
            <p style="text-align: justify;">Ap&oacute;s as formalidades legais, o(a) autuado(a) foi entregue ao N&uacute;cleo da Pol&iacute;cia Militar do Tribunal de Justi&ccedil;a de Pernambuco a fim de ser apresentado(a) na Audi&ecirc;ncia de Cust&oacute;dia.</p>
            <p style="text-align: justify;">Outrossim, solicito a Vossa Excel&ecirc;ncia que seja encaminhado &agrave; <strong>{delegacia_para_onde_o_procedimento_sera_remetido}</strong>, atrav&eacute;s de of&iacute;cio, o resultado da referida audi&ecirc;ncia com a situa&ccedil;&atilde;o atualizada do(a) autuado(a), para que o Delegado presidente do Inqu&eacute;rito Policial possa cumprir os prazos processuais.</p>
            <p>Em anexo, seguem c&oacute;pias do procedimento lavrado.</p>
            <p style="text-align: center;">Respeitosamente,</p>
            <p style="text-align: center;">&nbsp;</p>
            <p style="text-align: center;">{nome_do_delegado}<br /> Delegado(a) de Pol&iacute;cia</p>
        `,
    ativo: true,
    tags: ["autuados", "vitimas", "delegacia_afeto"],
  },
  {
    id: 13,
    nomePeca: "APFD-Comunica Juiz (sem fiança/1 autor)",
    htmlContent: `
            <p style="text-align: right;"><strong>{cidade_onde_o_procedimento_esta_sendo_realizado}, {data_mes_e_ano}</strong></p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>Ref.: {numero_do_procedimento}</p>
            <p>&nbsp;</p>
            <p><strong>A SUA EXCEL&Ecirc;NCIA O(A) SENHOR(A),</strong></p>
            <p><strong>JUIZ(A) DE DIREITO DO ESTADO DE PERNAMBUCO</strong></p>
            <p><strong>PROMOTOR DE JUSTI&Ccedil;A DO ESTADO DE PERNAMBUCO</strong></p>
            <p><strong>DEFENSORIA P&Uacute;BLICA DO ESTADO DE PERNAMBUCO</strong></p>
            <p><strong>&nbsp;</strong></p>
            <p>&nbsp;</p>
            <p>Senhor(a) Juiz(a), Promotor(a) e Defensor(a),</p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">Levo ao conhecimento de V.Ex.&ordf; que foi preso(a) em flagrante delito a(s) pessoa(s) de <strong>{qualificacao_completa_do_imputado}</strong>, por ter infringido o(s) {incidencia_penal}, fato ocorrido no dia {data_e_hora_do_fato}, na(o) {endereco_onde_ocorreu_o_fato}, de acordo com o Boletim de Ocorr&ecirc;ncia de n&ordm; {numero_do_bo}, tendo como v&iacute;tima(s) <strong>{qualificacao_da_vitima}</strong>.</p>
            <p style="text-align: justify;">Ap&oacute;s as formalidades legais, o(a) autuado(a) foi entregue ao N&uacute;cleo da Pol&iacute;cia Militar do Tribunal de Justi&ccedil;a de Pernambuco a fim de ser apresentado(a) na Audi&ecirc;ncia de Cust&oacute;dia.</p>
            <p style="text-align: justify;">Outrossim, solicito a Vossa Excel&ecirc;ncia que seja encaminhado &agrave; <strong>{delegacia_para_onde_o_procedimento_sera_remetido}</strong>, atrav&eacute;s de of&iacute;cio, o resultado da referida audi&ecirc;ncia com a situa&ccedil;&atilde;o atualizada do(a) autuado(a), para que o Delegado presidente do Inqu&eacute;rito Policial possa cumprir os prazos processuais.</p>
            <p>Em anexo, seguem c&oacute;pias do procedimento lavrado.</p>
            <p style="text-align: center;">Respeitosamente,</p>
            <p style="text-align: center;">&nbsp;</p>
            <p style="text-align: center;">{nome_do_delegado}<br /> Delegado(a) de Pol&iacute;cia</p>
        `,
    ativo: true,
    tags: ["autuados", "vitimas", "delegacia_afeto"],
  },
  {
    id: 14,
    nomePeca: "APFD-Comunica Promotor (com fiança/+ 1 autor)",
    htmlContent: `
            <p style="text-align: right;"><strong>{cidade_onde_o_procedimento_esta_sendo_realizado}, {data_mes_e_ano}</strong></p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p><br /> Ref.: {numero_do_procedimento}</p>
            <p>&nbsp;</p>
            <p><strong>A SUA EXCEL&Ecirc;NCIA O(A) SENHOR(A),</strong></p>
            <p><strong>PROMOTOR DE JUSTI&Ccedil;A DO ESTADO DE PERNAMBUCO </strong></p>
            <p>&nbsp;</p>
            <p>Senhor(a) Promotor(a),</p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">Levo ao conhecimento de V.Ex.&ordf; que foi preso(a) em flagrante delito a(s) pessoa(s) de: <strong>{qualificacao_completa_do_imputado}</strong>, por ter infringido o(s)&nbsp;<strong>{incidencia_penal}</strong>, fato ocorrido no dia {data_e_hora_do_fato}, na(o) {endereco_onde_ocorreu_o_fato}, de acordo com o Boletim de Ocorr&ecirc;ncia de n&ordm; {numero_do_bo}, tendo como v&iacute;tima(s): <strong>{nome_da_vitima}</strong>.</p>
            <p style="text-align: justify;">Ap&oacute;s as formalidades legais o(a) autuado(a) foi posto em liberdade condicional, mediante recolhimento de fian&ccedil;a no valor de R$&nbsp;<strong>{valor_da_fianca}</strong>.</p>
            <p>Em anexo, seguem c&oacute;pias do procedimento lavrado.</p>
            <p>Respeitosamente,</p>
            <p style="text-align: center;">&nbsp;</p>
            <p style="text-align: center;"><strong>{nome_do_delegado}</strong><br /> Delegado(a) de Pol&iacute;cia</p>
            <p>&nbsp;</p>
         `,
    ativo: true,
    tags: ["autuados", "vitimas", "fianca"],
  },
  {
    id: 15,
    nomePeca: "APFD-Comunica Promotor (com fiança/1 autor)",
    htmlContent: `
            <p style="text-align: right;"><strong>{cidade_onde_o_procedimento_esta_sendo_realizado}, {data_mes_e_ano}</strong></p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p><br /> Ref.: {numero_do_procedimento}</p>
            <p>&nbsp;</p>
            <p><strong>A SUA EXCEL&Ecirc;NCIA O(A) SENHOR(A),</strong></p>
            <p><strong>PROMOTOR DE JUSTI&Ccedil;A DO ESTADO DE PERNAMBUCO </strong></p>
            <p>&nbsp;</p>
            <p><strong>PROMOTOR DE JUSTI&Ccedil;A DO ESTADO DE PERNAMBUCO </strong></p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">Levo ao conhecimento de V.Ex.&ordf; que foi preso(a) em flagrante delito a(s) pessoa(s) de: <strong>{qualificacao_completa_do_imputado}</strong>, por ter infringido o(s)&nbsp;<strong>{incidencia_penal}</strong>, fato ocorrido no dia {data_e_hora_do_fato}, na(o) {endereco_onde_ocorreu_o_fato}, de acordo com o Boletim de Ocorr&ecirc;ncia de n&ordm; {numero_do_bo}, tendo como v&iacute;tima(s): <strong>{nome_da_vitima}</strong>.</p>
            <p style="text-align: justify;">Ap&oacute;s as formalidades legais o(a) autuado(a) foi posto em liberdade condicional, mediante recolhimento de fian&ccedil;a no valor de R$&nbsp;<strong>{valor_da_fianca}</strong>.</p>
            <p>Em anexo, seguem c&oacute;pias do procedimento lavrado.</p>
            <p>Respeitosamente,</p>
            <p style="text-align: center;">&nbsp;</p>
            <p style="text-align: center;"><strong>{nome_do_delegado}</strong><br /> Delegado(a) de Pol&iacute;cia</p>
            <p>&nbsp;</p>
         `,
    ativo: true,
    tags: ["autuados", "vitimas", "fianca"],
  },
  {
    id: 16,
    nomePeca: "APFD-Comunica Promotor (sem fiança/+ 1 autor)",
    htmlContent: `
            <p style="text-align: right;"><strong>{cidade_onde_o_procedimento_esta_sendo_realizado}, {data_mes_e_ano}</strong></p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>Ref.: {numero_do_procedimento}</p>
            <p>&nbsp;</p>
            <p><strong>A SUA EXCEL&Ecirc;NCIA O(A) SENHOR(A),</strong></p>
             <p><strong>PROMOTOR DE JUSTI&Ccedil;A DO ESTADO DE PERNAMBUCO </strong></p>
            <p><strong>&nbsp;</strong></p>
            <p>&nbsp;</p>
             <p><strong>PROMOTOR DE JUSTI&Ccedil;A DO ESTADO DE PERNAMBUCO </strong></p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">Levo ao conhecimento de V.Ex.&ordf; que foi preso(a) em flagrante delito a(s) pessoa(s) de <strong>{qualificacao_completa_do_imputado}</strong>, por ter infringido o(s) {incidencia_penal}, fato ocorrido no dia {data_e_hora_do_fato}, na(o) {endereco_onde_ocorreu_o_fato}, de acordo com o Boletim de Ocorr&ecirc;ncia de n&ordm; {numero_do_bo}, tendo como v&iacute;tima(s) <strong>{qualificacao_da_vitima}</strong>.</p>
            <p style="text-align: justify;">Ap&oacute;s as formalidades legais, o(a) autuado(a) foi entregue ao N&uacute;cleo da Pol&iacute;cia Militar do Tribunal de Justi&ccedil;a de Pernambuco a fim de ser apresentado(a) na Audi&ecirc;ncia de Cust&oacute;dia.</p>
            <p style="text-align: justify;">Outrossim, solicito a Vossa Excel&ecirc;ncia que seja encaminhado &agrave; <strong>{delegacia_para_onde_o_procedimento_sera_remetido}</strong>, atrav&eacute;s de of&iacute;cio, o resultado da referida audi&ecirc;ncia com a situa&ccedil;&atilde;o atualizada do(a) autuado(a), para que o Delegado presidente do Inqu&eacute;rito Policial possa cumprir os prazos processuais.</p>
            <p>Em anexo, seguem c&oacute;pias do procedimento lavrado.</p>
            <p style="text-align: center;">Respeitosamente,</p>
            <p style="text-align: center;">&nbsp;</p>
            <p style="text-align: center;">{nome_do_delegado}<br /> Delegado(a) de Pol&iacute;cia</p>
        `,
    ativo: true,
    tags: ["autuados", "vitimas", "delegacia_afeto"],
  },
  {
    id: 17,
    nomePeca: "APFD-Comunica Promotor (sem fiança/1 autor)",
    htmlContent: `
            <p style="text-align: right;"><strong>{cidade_onde_o_procedimento_esta_sendo_realizado}, {data_mes_e_ano}</strong></p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>Ref.: {numero_do_procedimento}</p>
            <p>&nbsp;</p>
            <p><strong>A SUA EXCEL&Ecirc;NCIA O(A) SENHOR(A),</strong></p>
             <p><strong>PROMOTOR DE JUSTI&Ccedil;A DO ESTADO DE PERNAMBUCO </strong></p>
            <p><strong>&nbsp;</strong></p>
            <p>&nbsp;</p>
             <p><strong>PROMOTOR DE JUSTI&Ccedil;A DO ESTADO DE PERNAMBUCO </strong></p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">Levo ao conhecimento de V.Ex.&ordf; que foi preso(a) em flagrante delito a(s) pessoa(s) de <strong>{qualificacao_completa_do_imputado}</strong>, por ter infringido o(s) {incidencia_penal}, fato ocorrido no dia {data_e_hora_do_fato}, na(o) {endereco_onde_ocorreu_o_fato}, de acordo com o Boletim de Ocorr&ecirc;ncia de n&ordm; {numero_do_bo}, tendo como v&iacute;tima(s) <strong>{qualificacao_da_vitima}</strong>.</p>
            <p style="text-align: justify;">Ap&oacute;s as formalidades legais, o(a) autuado(a) foi entregue ao N&uacute;cleo da Pol&iacute;cia Militar do Tribunal de Justi&ccedil;a de Pernambuco a fim de ser apresentado(a) na Audi&ecirc;ncia de Cust&oacute;dia.</p>
            <p style="text-align: justify;">Outrossim, solicito a Vossa Excel&ecirc;ncia que seja encaminhado &agrave; <strong>{delegacia_para_onde_o_procedimento_sera_remetido}</strong>, atrav&eacute;s de of&iacute;cio, o resultado da referida audi&ecirc;ncia com a situa&ccedil;&atilde;o atualizada do(a) autuado(a), para que o Delegado presidente do Inqu&eacute;rito Policial possa cumprir os prazos processuais.</p>
            <p>Em anexo, seguem c&oacute;pias do procedimento lavrado.</p>
            <p style="text-align: center;">Respeitosamente,</p>
            <p style="text-align: center;">&nbsp;</p>
            <p style="text-align: center;">{nome_do_delegado}<br /> Delegado(a) de Pol&iacute;cia</p>
        `,
    ativo: true,
    tags: ["autuados", "vitimas", "delegacia_afeto"],
  },
  {
    id: 18,
    nomePeca: "APFD-Comunicação à Família",
    htmlContent: `
            <p style="text-align: right;">{cidade_onde_o_procedimento_esta_sendo_realizado}, {data_mes_e_ano}</p>
            <p>&nbsp;</p>
            <p style="text-align: center;"><strong>COMUNICA&Ccedil;&Atilde;O A FAM&Iacute;LIA OU PESSOA INDICADA PELO PRESO</strong></p>
            <p>&nbsp;</p>
            <p>Ref.: <strong>{tipo_de_procedimento}&nbsp;n&ordm;&nbsp;{numero_do_procedimento}</strong></p>
            <p>&nbsp;</p>
            <p>Prezado(a) Senhor(a),</p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">Em conformidade com o que estabelece o Art. 5&ordm;, Inciso LXII, da Constitui&ccedil;&atilde;o Federal, levo ao conhecimento de V.S&ordf;. que, nesta data, nesta Delegacia de Pol&iacute;cia, foi preso e autuado em flagrante delito&nbsp;<strong>{qualificacao_completa_do_imputado}</strong>, por ter infringido o(s)&nbsp;<strong>{incidencia_penal}</strong>, e, ap&oacute;s as formalidades legais, foi entregue ao N&uacute;cleo da PMPE do TJPE a fim de ser apresentado na Audi&ecirc;ncia de Cust&oacute;dia.</p>
            <p>&nbsp;</p>
            <p style="text-align: center;">Atenciosamente,</p>
            <p style="text-align: center;">&nbsp;</p>
            <p style="text-align: center;"><strong>{nome_do_delegado}</strong><br />Delegado(a) de Pol&iacute;cia</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>A Sua Senhoria</p>
            <p>O(a) Senhor(a): __________________________________________________________________________</p>
            <p>Endere&ccedil;o: _______________________________________________________________________________</p>
            <p>Assinatura: ______________________________________________________________________________</p>
            `,
    ativo: true,
    tags: ["autuados"],
  },
  {
    id: 19,
    nomePeca: "APFD-Condutor (Art. 304 do CPP)",
    htmlContent: `
            <p style="text-align: center;"><strong>AUTO DE PRIS&Atilde;O EM FLAGRANTE DELITO<br /> </strong>(Art. 304 do CPP)</p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">&Agrave;s {hora_atual} horas, do dia {data_mes_e_ano}, nesta Cidade de&nbsp;{cidade_onde_o_procedimento_esta_sendo_realizado}, Estado de Pernambuco, no Cart&oacute;rio desta Delegacia de Pol&iacute;cia, onde presente se encontrava o(a) Bel(a). {nome_do_delegado}, respectivo(a) Delegado(a), comigo {nome_do_escrivao}, Escriv&atilde;o(&atilde;) de seu cargo, ao final assinado(a), a&iacute; compareceu, na qualidade de&nbsp;<strong>CONDUTOR(A) e 1&ordf; TESTEMUNHA:</strong>&nbsp;<strong>{qualificacao_do_condutor}</strong>. Compromissado(a) na forma da lei, advertido(a) das penas cominadas ao falso testemunho, prometeu dizer a verdade do que soubesse e lhe fosse perguntado. Inquirido(a), respondeu:&nbsp;<strong>QUE</strong>, apresenta preso em flagrante delito: <strong>{qualificacao_completa_do_imputado}</strong>, na presen&ccedil;a da(s)&nbsp;<strong>V&Iacute;TIMA(S)</strong>&nbsp;<strong>{qualificacao_da_vitima}</strong> e da <strong>1&ordf;&nbsp;TESTEMUNHA</strong> <strong>{qualificacao_da_primeira_testemunha}</strong>, pelos motivos que, a seguir, passa a expor:&nbsp;<strong>QUE</strong>,&nbsp;______________________. Nada mais disse nem lhe foi perguntado, determinou a Autoridade Policial encerrar este Termo, que, ap&oacute;s ser lido e achado conforme, o qual assina juntamente com o Condutor e comigo Escriv&atilde;o que digitei.</p>
            <p>&nbsp;</p>
            <p><strong>AUTORIDADE POLICIAL: __________________________________________________________</strong></p>
            <p><strong>CONDUTOR(A): ___________________________________________________________________</strong></p>
            <p><strong>ESCRIV&Atilde;O(&Atilde;): ______________________________________________________________________</strong></p>
            <p>&nbsp;</p>
    `,
    ativo: true,
    tags: [
      "condutores",
      "autuados",
      "vitimas",
      "primeira_testemunha",
      "segunda_testemunha",
    ],
  },

  {
    id: 20,
    nomePeca: "APFD-Conduzido (Art. 304 do CPP)",
    htmlContent: `
            <p style="text-align: center;"><strong>AUTO DE PRIS&Atilde;O EM FLAGRANTE DELITO<br /></strong><span style="font-size: medium;">(Art. 307 do CPP)</span></p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">Aos {data_mes_e_ano}, nesta cidade de {cidade_onde_o_procedimento_esta_sendo_realizado}, Estado de Pernambuco, no Cart&oacute;rio desta Delegacia de Pol&iacute;cia, onde presente se encontrava o(a) Bel(a). {nome_do_delegado}, respectivo(a) Delegado(a), comigo {nome_do_escrivao}, Escriv&atilde;o(&atilde;) de seu cargo, ao final assinado(a), o(a) qual em raz&atilde;o da pr&aacute;tica da infra&ccedil;&atilde;o penal capitulada no&nbsp;<strong>{incidencia_penal}</strong>&nbsp;(em sua presen&ccedil;a ou contra sua pessoa no exerc&iacute;cio de suas fun&ccedil;&otilde;es), sucedido da Voz de Pris&atilde;o em Flagrante Delito, passando a qualifica&ccedil;&atilde;o do CONDUZIDO(A):&nbsp;<strong>{qualificacao_completa_do_imputado}</strong>, sabendo ler e escrever, o qual depois de cientificado das imputa&ccedil;&otilde;es que lhe eram feitas e dos direitos assegurados pelo Art. 5&ordm;, caput e Incs. LXI, LXII, LXIII, LXIV, LXV e LXVI, da Constitui&ccedil;&atilde;o Federal, do respeito &agrave; sua integridade f&iacute;sica e moral, de n&atilde;o ser preso(a) sen&atilde;o em flagrante delito ou por ordem escrita e fundamentada de autoridade judici&aacute;ria competente, de ter sua pris&atilde;o e o local onde se encontre comunicados, imediatamente, ao juiz competente e &agrave; sua fam&iacute;lia, ou &agrave; pessoa por ele(a) indicada, de permanecer calado(a), sendo-lhe assegurada a assist&ecirc;ncia da fam&iacute;lia e de advogado e a identifica&ccedil;&atilde;o dos respons&aacute;veis por sua pris&atilde;o ou por seu interrogat&oacute;rio policial, expressou a vontade de que sua pris&atilde;o seja comunicada &agrave; pessoa de _________________<strong>. Interrogado(a) na forma do Art. 187, &sect;&sect; 1&ordm; e 2&ordm; do C&oacute;digo de Processo Penal, RESPONDEU: QUE,</strong>___________________. Nada mais disse, nem lhe foi perguntado. Ap&oacute;s consultar a Delegacia de Capturas obteve a informa&ccedil;&atilde;o por meio do(a) Agente de Pol&iacute;cia __________________, DE QUE ESTAVA A CONSTAR OU NADA CONSTAR EM RELA&Ccedil;&Atilde;O AO CONDUZIDO. Depois de lido e achado conforme, determinou a Autoridade fosse encerrado o presente Interrogat&oacute;rio, assinando-o juntamente com o(a) Conduzido(a) e, comigo, Escriv&atilde;o(&atilde;), que o digitei.</p>
            <p>&nbsp;</p>
            <p>AUTORIDADE POLICIAL: ____________________________________________________________</p>
            <p>CONDUZIDO(A): ____________________________________________________________________</p>
            <p>ESCRIV&Atilde;O(&Atilde;): ________________________________________________________________________</p>
            `,
    ativo: true,
    tags: ["autuados"],
  },
  {
    id: 21,
    nomePeca: "APFD-Encaminha fiança ao Banco",
    htmlContent: `
            <p style="text-align: right;">{cidade_onde_o_procedimento_esta_sendo_realizado}, {data_mes_e_ano}</p>
            <p><strong>Of&iacute;cio n&ordm;&nbsp;</strong><br /><strong>Ref.: {tipo_de_procedimento} n&ordm; {numero_do_procedimento}</strong></p>
            <p>&nbsp;</p>
            <p>A(o) Senhor(a)<br /><strong>GERENTE DO BANCO DO BRASIL S.A.</strong><br /><strong>{cidade_onde_o_procedimento_esta_sendo_realizado}/PE</strong></p>
            <p>&nbsp;</p>
            <p>Senhor(a) Gerente,</p>
            <p style="text-align: justify;">Dando cumprimento ao disposto no Art. 331, do C&oacute;digo de Processo Penal, remeto a V.Sa., em anexo, a import&acirc;ncia de <strong>{valor_da_fianca}</strong> para que seja providenciado o dep&oacute;sito de fian&ccedil;a em favor de <strong>{qualificacao_completa_do_imputado}</strong>, que, nesta data, foi preso(a) e autuado(a) em flagrante delito, como incurso nas penas do <strong>{incidencia_penal}</strong>, e, posteriormente, liberado, ap&oacute;s prestar referida fian&ccedil;a, para que, solto, possa se defender da imputa&ccedil;&atilde;o que lhe &eacute; feita.</p>
            <p style="text-align: justify;">&nbsp;</p>
            <p style="text-align: center;">Atenciosamente,</p>
            <p style="text-align: center;"><strong>{nome_do_delegado}</strong><br />Delegado(a) de Pol&iacute;cia</p>
            `,
    ativo: true,
    tags: ["autuados", "fianca"],
  },
  {
    id: 22,
    nomePeca: "APFD-Encaminha preso(s) para Audiência de Custódia",
    htmlContent: `
            <p style="text-align: right;"><strong>{cidade_onde_o_procedimento_esta_sendo_realizado}, {data_mes_e_ano}</strong></p>
            <p>Ref.: {numero_do_procedimento}</p>
            <p>&nbsp;</p>
            <p><strong>SR(&ordf;). COORDENADOR</strong><br /> <strong>POL&Iacute;CIA MILITAR DE PERNAMBUCO</strong></p>
            <p>&nbsp;</p>
            <p><strong>ASSUNTO: APRESENTA&Ccedil;&Atilde;O PARA AUDI&Ecirc;NCIA DE CUST&Oacute;DIA</strong></p>
            <p>&nbsp;</p>
            <p>Senhor(a) Coordenador,</p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">Em cumprimento ao disposto no Termo de Ades&atilde;o ao&nbsp;<strong>Termo de Coopera&ccedil;&atilde;o T&eacute;cnica n&ordm; 007/2015</strong>, firmado entre o Tribunal de Justi&ccedil;a de Pernambuco e o Conselho Nacional de Justi&ccedil;a, apresento a Vossa Senhoria o(a)(s) autuado(a)(s) <strong>{qualificacao_completa_do_imputado}</strong>, preso(a)(s) em flagrante delito no dia&nbsp;<strong>{data_e_hora_do_fato}</strong>, por crime capitulado no(a)&nbsp;<strong>{incidencia_penal}</strong>, onde teve como v&iacute;tima(s) a(s) pessoa(s) de <strong>{qualificacao_da_vitima}</strong>, fato ocorrido no(a) {endereco_onde_ocorreu_o_fato}, bem como pe&ccedil;as do Auto de Pris&atilde;o em Flagrante Delito, Nota de Culpa, Comunica&ccedil;&atilde;o &agrave; Fam&iacute;lia e Exame Traumatol&oacute;gico, devendo o(a)(s) mesmo(a)(s) ser(em) recolhido(a)(s) na carceragem com o fim de aguardar a Audi&ecirc;ncia de Cust&oacute;dia.</p>
            <p>&nbsp;</p>
            <p style="text-align: center;">Atenciosamente,</p>
            <p style="text-align: center;">&nbsp;</p>
            <p style="text-align: center;"><strong>{nome_do_delegado}</strong><br /> Delegado(a) de Pol&iacute;cia</p>
            <p>&nbsp;</p>
    `,
    ativo: true,
    tags: ["autuados", "vitimas"],
  },
  {
    id: 23,
    nomePeca: "APFD-Encerramento (Art. 307 do CPP)",
    htmlContent: `
            <p style="text-align: center;"><strong>AUTO DE PRIS&Atilde;O EM FLAGRANTE DELITO<br /> </strong>(Art. 307 do CPP)</p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">Finalmente, n&atilde;o havendo mais oitiva a ser procedida, determinou a Autoridade Policial fosse encerrado o presente Auto de Pris&atilde;o em Flagrante Delito e providenciada sua remessa imediata ao juiz a quem couber tomar conhecimento do fato delituoso, na forma da parte final do Art. 307 do C&oacute;digo de Processo Penal vigente. Eu, __________________ {nome_do_escrivao}, Escriv&atilde;o(&atilde;), o digitei.</p>
            <p>&nbsp;</p>
            <p style="text-align: center;"><strong>{nome_do_delegado}</strong><br /> Delegado(a) de Pol&iacute;cia</p>
            <p style="text-align: center;">&nbsp;</p>
        `,
    ativo: true,
    tags: [],
  },
  {
    id: 24,
    nomePeca: "APFD-Nota de culpa",
    htmlContent: `
            <p style="text-align: center;"><strong>NOTA DE CULPA</strong><br /> (Art. 306 &sect; 2&ordm; do CPP)</p>
            <p style="text-align: center;">&nbsp;</p>
            <p style="text-align: justify;">O(a) Bel(a). {nome_do_delegado}, Delegado(a) da Pol&iacute;cia Civil, Estado de Pernambuco, no uso de suas atribui&ccedil;&otilde;es legais,</p>
            <p style="text-align: justify;"><strong>FAZ SABER</strong> a <strong>{qualificacao_completa_do_imputado}</strong><strong>, </strong>que se encontra preso e autuado em flagrante delito<strong>,</strong> por haver cometido crime, incorrendo assim nas san&ccedil;&otilde;es cominadas no(s) <strong>{incidencia_penal}</strong>, contra<strong> {nome_da_vitima}, </strong>tendo sido lavrado o respectivo Auto, no qual depuseram como:</p>
            <p style="text-align: justify;"><strong>CONDUTOR</strong>: {qualificacao_do_condutor}</p>
            <p style="text-align: justify;"><strong>TESTEMUNHA(S)</strong>: <strong>{qualificacao_da_primeira_testemunha}</strong></p>
            <p style="text-align: justify;">E, para sua ci&ecirc;ncia, mandou entregar-lhe a presente <strong>NOTA DE CULPA</strong>. Eu, {nome_do_escrivao}, Escriv&atilde;o(&atilde;) que a digitei.</p>
            <p>&nbsp;</p>
            <p style="text-align: right;"><strong>{cidade_onde_o_procedimento_esta_sendo_realizado}, {data_mes_e_ano}</strong></p>
            <p style="text-align: center;"><strong>{nome_do_delegado}</strong></p>
            <p style="text-align: center;">Delegado(a) de Pol&iacute;cia</p>
            <p>&nbsp;</p>
            <p style="text-align: center;"><strong>RECIBO</strong></p>
            <p style="text-align: center;"><strong>{cidade_onde_o_procedimento_esta_sendo_realizado}, {data_mes_e_ano}</strong></p>
            <p style="text-align: center;">&Agrave;s ________ horas, desta data, recebi o original da presente Nota de Culpa.</p>
            <p style="text-align: center;">&nbsp;</p>
            <p style="text-align: center;">____________________________________________________________________<br /> Assinatura do Conduzido / Recebedor</p>
            <p>&nbsp;</p>
    `,
    ativo: true,
    tags: [
      "autuados",
      "vitimas",
      "condutores",
      "primeira_testemunha",
      "segunda_testemunha",
    ],
  },
  {
    id: 25,
    nomePeca: "APFD-Ofício solicitando Folha de Antecedentes Criminais",
    htmlContent: `
            <p style="text-align: right;">{cidade_onde_o_procedimento_esta_sendo_realizado}, {data_mes_e_ano}</p>
            <p style="text-align: right;">&nbsp;</p>
            <p><strong>Of&iacute;cio n&ordm;</strong><br /><strong>Ref.: {tipo_de_procedimento} n&ordm; {numero_do_procedimento}</strong><br />SEI n&ordm; [SEI]</p>
            <p>&nbsp;</p>
            <p><strong>EXMO(a). Sr. GESTOR</strong><br /><strong>INSTITUTO DE IDENTIFICA&Ccedil;&Atilde;O TAVARES BURIL- IITB</strong><br /><strong>RECIFE/PE</strong></p>
            <p>&nbsp;</p>
            <p>Senhor(a) Gestor,</p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">Com o objetivo de instruir {tipo_de_procedimento}, em tramita&ccedil;&atilde;o nesta Delegacia, solicito a V.Ex.&ordf; provid&ecirc;ncias no sentido de fornecer, o mais breve poss&iacute;vel, informa&ccedil;&otilde;es sobre os registros de assentamentos Policiais Criminais, FOLHA DE ANTECEDENTES CRIMINAIS de: <strong>{qualificacao_completa_do_imputado}</strong>.</p>
            <p style="text-align: justify;">&nbsp;</p>
            <p style="text-align: justify;">&nbsp;</p>
            <p style="text-align: center;">Atenciosamente,</p>
            <p style="text-align: center;">&nbsp;</p>
            <p style="text-align: center;"><strong>{nome_do_delegado}</strong><br />Delegado(a) de Pol&iacute;cia</p>
            `,
    ativo: true,
    tags: ["autuados"],
  },
  {
    id: 26,
    nomePeca: "APFD-Recibo de Preso",
    htmlContent: `
            <p style="text-align: center;"><strong>R E C I B O</strong></p>
            <p style="text-align: justify;">RECEBI, nesta data, da parte do(a) senhor(a) {qualificacao_do_condutor}, na qualidade de CONDUTOR(A), j&aacute; qualificado(a) nos autos, a pessoa de <strong>{qualificacao_completa_do_imputado}</strong>, detida segundo aquele, em situa&ccedil;&atilde;o de FLAGR&Acirc;NCIA pela pr&aacute;tica de delito da(o)&nbsp;<strong>{incidencia_penal}</strong>, previsto em nosso Diploma Legal vigente, conforme DECLARA&Ccedil;&Atilde;O apresentada nesse sentido por parte da pessoa do(a) condutor(a) em ep&iacute;grafe.</p>
            <p>&nbsp;</p>
            <p style="text-align: center;"><strong>{cidade_onde_o_procedimento_esta_sendo_realizado}, {data_mes_e_ano}</strong></p>
            <p style="text-align: center;"><strong>{nome_do_delegado}</strong><br /> Delegado(a) de Pol&iacute;cia<br /> RECEBEDOR(A)</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p style="text-align: center;"><strong>R E C I B O</strong></p>
            <p style="text-align: center;">RECEBI, nesta data, da parte do(a) Bel(a). {nome_do_delegado}, Delegado(a) de Pol&iacute;cia, o original das minhas declara&ccedil;&otilde;es prestadas nesta data, no cart&oacute;rio desta unidade, onde consta o devido RECIBO determinado pela nova reda&ccedil;&atilde;o do art. 304,"caput", do CPP; Lei n&ordm;. 11.113 de 13.05.2005, e, para que o presente venha a produzir os seus efeitos legais, o firmo de pr&oacute;prio punho.</p>
            <p style="text-align: center;">&nbsp;</p>
            <p style="text-align: center;"><strong>{cidade_onde_o_procedimento_esta_sendo_realizado}, {data_mes_e_ano}</strong></p>
            <p style="text-align: center;">_________________________________________________________<br /> Condutor(a)</p>
            <p style="text-align: center;">&nbsp;</p>
    `,
    ativo: true,
    tags: ["condutores", "autuados"],
  },
  {
    id: 27,
    nomePeca: "APFD-Solicita Perícia Tanatoscópica (vítima)",
    htmlContent: `
            <p style="text-align: right;">{cidade_onde_o_procedimento_esta_sendo_realizado}, {data_mes_e_ano}</p>
            <p style="text-align: right;">&nbsp;</p>
            <p><strong>Of&iacute;cio n&ordm; 24333031821</strong><br /><strong>Ref.: {tipo_de_procedimento} n&ordm; {numero_do_procedimento}</strong><br /><strong>BOE n&ordm; {numero_do_bo}</strong></p>
            <p>&nbsp;</p>
            <p><strong>SR. GESTOR</strong><br /><strong>INSTITUTO DE MEDICINA LEGAL - IML - SDS/PE</strong></p>
            <p>&nbsp;</p>
            <p>Senhor(a) Gestor,</p>
            <p style="text-align: justify;">Encaminho a V.S&ordf;., pelo presente, a fim de que seja submetido a <strong>PER&Iacute;CIA TANATOSC&Oacute;PICA</strong>, o corpo que pertenceu a <strong>{qualificacao_da_vitima}</strong>, tendo prov&aacute;vel causa jur&iacute;dica da morte:</p>
            <p style="text-align: justify;">&nbsp;</p>
            <p><strong>1 - Morte Natural ( )</strong><br /><strong>2 - Morte Violenta ( ) a) Homic&iacute;dio ( ) b) Suic&iacute;dio ( )</strong><br /><strong>3 - Acidente ( ) a) Trabalho ( ) b) Domiciliar ( )</strong><br /><strong>4 - Tr&acirc;nsito ( ) a) Atropelamento ( ) b) Capotamento ( ) c) Colis&atilde;o ( )</strong></p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">Conclu&iacute;do o competente Laudo Pericial, este dever&aacute; ser remetido &agrave; DELEGACIA DE POL&Iacute;CIA DA <strong>{delegacia_para_onde_o_procedimento_sera_remetido}</strong>.</p>
            <p style="text-align: justify;">&nbsp;</p>
            <p style="text-align: justify;">&nbsp;</p>
            <p style="text-align: center;">Atenciosamente,</p>
            <p style="text-align: center;">&nbsp;</p>
            <p style="text-align: center;"><strong>{nome_do_delegado}</strong><br />Delegado(a) de Pol&iacute;cia</p>
            `,
    ativo: true,
    tags: ["vitimas", "delegacia_afeto"],
  },
  {
    id: 28,
    nomePeca: "APFD-Solicita Perícia Traumatológica (autor/vítima)",
    htmlContent: `
            <p style="text-align: right;"><strong>{cidade_onde_o_procedimento_esta_sendo_realizado}, {data_mes_e_ano}</strong></p>
            <p><br /> Ref.: {numero_do_procedimento}<br /> BOE: <strong>n&ordm; {numero_do_bo}</strong></p>
            <p>&nbsp;</p>
            <p><strong>GESTOR DO INSTITUTO DE MEDICINA LEGAL - IML - SDS/PE</strong></p>
            <p>&nbsp;</p>
            <p>Senhor(a) Gestor,</p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">Pelo presente solicito provid&ecirc;ncias de V.S&ordf;., no sentido de submeter &agrave; <strong>PER&Iacute;CIA TRAUMATOL&Oacute;GICA</strong> a pessoa abaixo qualificada:</p>
            <p style="text-align: justify;"><strong>{qualificacao_completa_do_imputado}.</strong></p>
            <p style="text-align: justify;">Encaminhe-se o laudo &agrave; {delegacia_para_onde_o_procedimento_sera_remetido}</p>
            <p>&nbsp;</p>
            <p>Atenciosamente,</p>
            <p>&nbsp;</p>
            <p style="text-align: center;"><strong>{nome_do_delegado}</strong><br /> Delegado(a) de Pol&iacute;cia</p>
            <p>&nbsp;</p>
    `,
    ativo: true,
    tags: ["pessoas", "delegacia_afeto"],
  },
  {
    id: 29,
    nomePeca: "APFD-Termo de Fiança",
    htmlContent: `
            <p style="text-align: center;"><strong>TERMO DE FIAN&Ccedil;A<br /> </strong>N&ordm; __________________</p>
            <p style="text-align: center;">&nbsp;</p>
            <p style="text-align: justify;">Aos {data_mes_e_ano}, nesta&nbsp;DELEGACIA DE POL&Iacute;CIA onde presente se encontrava {nome_do_delegado}, Delegado(a) de Pol&iacute;cia, comigo {nome_do_escrivao},&nbsp;Escriv&atilde;o(&atilde;) de seu cargo, ao final assinado(a), ai presente o(a) Sr(a).&nbsp;{nome_do_imputado}, j&aacute; qualificado(a) nos Autos, por haver sido Preso(a) e Autuado(a) em Flagrante Delito, por infringir o&nbsp;<strong>{incidencia_penal}</strong>, em fun&ccedil;&atilde;o de cometimento de infra&ccedil;&atilde;o cujo apenamento o(a) beneficia com o direto de prestar a cau&ccedil;&atilde;o legal, arbitrando-a em&nbsp;<strong>R$ {valor_da_fianca}</strong>, pagos em esp&eacute;cie, cujo valor dever&aacute; ser depositado na&nbsp;<strong>Ag&ecirc;ncia da Caixa Econ&ocirc;mica Federal - CEF, de {cidade_onde_o_procedimento_esta_sendo_realizado}/PE</strong>&nbsp;em nome do(a) afian&ccedil;ado(a), &agrave; disposi&ccedil;&atilde;o da Justi&ccedil;a P&uacute;blica de PE. O(a) afian&ccedil;ado(a) foi cientificado(a) das obriga&ccedil;&otilde;es prevista nos Arts. 327 e 328 do C&oacute;digo de Processo Penal em vigor, obrigando-se a comparecer em Ju&iacute;zo para instru&ccedil;&atilde;o Criminal, sob pena de haver quebrado a fian&ccedil;a, sendo em seguida posto em liberdade pela Autoridade Policial. Nada mais havendo, mandou a Autoridade encerra o presente Termo que lido e achado conforme, o assina com o(a) afian&ccedil;ado(a) e comigo Escriv&atilde;o(&atilde;) que o digitei.</p>
            <p>&nbsp;</p>
            <p>AUTORIDADE POLICIAL: _______________________________________</p>
            <p>AFIAN&Ccedil;ADO: __________________________________________________</p>
            <p>ESCRIV&Atilde;O(&Atilde;): ___________________________________________________</p>
            <p>&nbsp;</p>
    `,
    ativo: true,
    tags: ["autuados", "fianca"],
  },
  {
    id: 30,
    nomePeca: "APFD-Vítima (Art. 304 do CPP)",
    htmlContent: `
            <p style="text-align: center;"><strong>AUTO DE PRIS&Atilde;O EM FLAGRANTE DELITO<br /> </strong>(Art. 304 do CPP)</p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">Na sequ&ecirc;ncia, passou a Autoridade a inquirir a&nbsp;<strong>V&Iacute;TIMA:</strong>&nbsp;{qualificacao_da_vitima}, sabendo ler e escrever, inquirida pela Autoridade passou a declarar&nbsp;<strong>QUE,</strong>&nbsp;__________________. Nada mais disse nem lhe foi perguntado. Lido e achado conforme, determinou a Autoridade que fosse encerrado o presente Termo, o qual assina juntamente com o(a) declarante, e comigo Escriv&atilde;o(&atilde;) que digitei.</p>
            <p>&nbsp;</p>
            <p>AUTORIDADE POLICIAL: __________________________________________________________</p>
            <p>V&Iacute;TIMA: __________________________________________________________________________</p>
            <p>ESCRIV&Atilde;O(&Atilde;): ______________________________________________________________________</p>
            <p>&nbsp;</p>
    `,
    ativo: true,
    tags: ["vitimas"],
  },
  {
    id: 31,
    nomePeca: "Auto Circunstanciado de Busca e Apreensão",
    htmlContent: `
            <p style="text-align: center;"><strong>AUTO CIRCUNSTANCIADO DE BUSCA E APREENS&Atilde;O<br /></strong><span style="font-size: medium;">(Art. 245, &sect; 7&ordm; do CPP)</span></p>
            <p style="text-align: center;">&nbsp;</p>
            <p style="text-align: justify;">Aos {data_mes_e_ano}, nesta cidade de {cidade_onde_o_procedimento_esta_sendo_realizado}, Estado de Pernambuco, em cumprimento ao Mandado de Busca e Apreens&atilde;o n&deg; <strong>{numero_do_mandado_de_busca}</strong> expedido pelo MM. Juiz de Direito da Comarca de {nome_da_comarca_que_expediu_o_mandado}, &agrave;s {hora_do_cumprimento_do_mandado} horas, fui em dilig&ecirc;ncia &agrave; <strong>{endereco_do_cumprimento_do_mandado}</strong>, e a&iacute;, depois de exibir o referido mandado judicial, INTIMEI o cidad&atilde;o <strong>{qualificacao_da_pessoa_intimada_da_busca_e_apreensao}</strong>, propriet&aacute;rio do im&oacute;vel, no sentido de que, imediatamente, me franqueasse o acesso ao interior do ambiente, a fim de efetuar a dilig&ecirc;ncia ordenada, no que fui atendido pelo mesmo, sendo convidadas, neste momento, para assistirem a esse procedimento, as Testemunhas <strong>{qualificacao_da_primeira_testemunha_do_mandado_de_busca}, e {qualificacao_da_segunda_testemunha_do_mandado_de_busca}</strong>, abaixo assinadas. Em companhia destas, adentrando ao im&oacute;vel supracitado, foi realizada uma minuciosa busca, com o exame de todos os c&ocirc;modos, a&iacute; encontrando os itens abaixo descritos, que apreendido e depositado neste &Oacute;rg&atilde;o Policial, para os fins devidos, com base no Art. 245 &sect; 7&ordm; do CPP, para constar, determinei a lavratura deste Auto, que, depois de lido e achado conforme, o subscrevo na condi&ccedil;&atilde;o de executor do Mandado, com as Testemunhas supracitadas e o(a) Escriv&atilde;o(&atilde;) de seu cargo, que o digitou.</p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">DESCRI&Ccedil;&Atilde;O DOS BENS APREENDIDOS:&nbsp;<strong>{descricao_dos_bens_apreendidos_no_mandado_de_busca}</strong></p>
            <p>&nbsp;</p>
            <p>AUTORIDADE: ________________________________________________</p>
            <p>TESTEMUNHA: _______________________________________________</p>
            <p>TESTEMUNHA: _______________________________________________</p>
            <p>ESCRIV&Atilde;O(&Atilde;): ___________________________________________________</p>
            <p style="text-align: center;">&nbsp;</p>
            <p>&nbsp;</p>
            `,
    ativo: true,
    tags: ["intimados", "primeira_testemunha", "segunda_testemunha"],
  },
  {
    id: 36,
    nomePeca:
      "Auto de Apreensão em Flagrante de Ato Infracional - AAFAI (Condutor)",
    htmlContent: `
            <p style="text-align: center;"><strong>AUTO DE APREENS&Atilde;O EM FLAGRANTE DE ATO INFRACIONAL</strong><br /><span style="font-size: medium;">(Art. 173, I da Lei n&ordm; 8.069, de 13/07/1990)</span></p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">&Agrave;s {hora_atual}, do dia {data_mes_e_ano} nesta Cidade de {cidade_onde_o_procedimento_esta_sendo_realizado}, Estado de Pernambuco, no Cart&oacute;rio desta DELEGACIA DE POL&Iacute;CIA, onde presente se encontrava o(a) Bel(a). {nome_do_delegado}, respectivo(a) Delegado(a) de Pol&iacute;cia, comigo, {nome_do_escrivao}, Escriv&atilde;o(&atilde;) de seu cargo, abaixo assinado(a), a&iacute; compareceu o CONDUTOR(A): <strong>{qualificacao_do_condutor}</strong>. Aos costumes disse ____________. Compromissado(a) na forma da lei, advertido(a) das penas cominadas ao falso testemunho, prometeu dizer a verdade do que soubesse e lhe fosse perguntado. Inquirido(a), respondeu: QUE, ___________________. Nada mais havendo a acrescentar, mandou a Autoridade Policial que fosse entregue ao Condutor(a) o Recibo de Entrega do(a) Infrator(a), bem como as c&oacute;pias do presente Auto e do Auto de Apresenta&ccedil;&atilde;o e Apreens&atilde;o (da arma se for o caso) por ele arrecadada. Em seguida, mandou encerrar este Auto, que, ap&oacute;s ser lido e achado conforme, o qual assina juntamente com o Condutor e comigo Escriv&atilde;o(&atilde;), que digitei.</p>
            <p>&nbsp;</p>
            <p>AUTORIDADE POLICIAL: ____________________________________________</p>
            <p>CONDUTOR(A): _____________________________________________________</p>
            <p>ESCRIV&Atilde;O(&Atilde;): _________________________________________________________</p>
            <p>&nbsp;</p>
            `,
    ativo: true,
    tags: ["condutores"],
  },
  {
    id: 37,
    nomePeca:
      "Auto de Apreensão em Flagrante de Ato Infracional - AAFAI (Encerramento)",
    htmlContent: `
            <p style="text-align: center;"><strong>AUTO DE APREENS&Atilde;O EM FLAGRANTE DE ATO INFRACIONAL</strong><br /><span style="font-size: medium;">(Art. 173, I da Lei n&ordm; 8.069, de 13/07/1990)</span></p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">Finalmente, n&atilde;o havendo mais oitivas a ser procedidas, determinou a Autoridade o encerramento do presente Auto de Apreens&atilde;o em Flagrante, comigo,&nbsp;{nome_do_escrivao} ______________, Escriv&atilde;o(&atilde;) de Pol&iacute;cia, que o digitei.</p>
            <p>&nbsp;</p>
            <p style="text-align: center;"><strong>{nome_do_delegado}</strong><br />Delegado(a) de Pol&iacute;cia</p>
            <p>&nbsp;</p>
            `,
    ativo: true,
    tags: [],
  },
  {
    id: 38,
    nomePeca:
      "Auto de Apreensão em Flagrante de Ato Infracional - AAFAI (Infrator)",
    htmlContent: `
            <p style="text-align: center;"><strong>AUTO DE APREENS&Atilde;O EM FLAGRANTE DE ATO INFRACIONAL</strong><br /><span style="font-size: medium;">(Art. 173, I da Lei n&ordm; 8.069, de 13/07/1990)</span></p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">Logo ap&oacute;s, passou a Autoridade a qualificar e inquirir o(a)&nbsp;<strong>CONDUZIDO(A): {qualificacao_completa_do_imputado}</strong>&nbsp;. Sabendo ler e escrever. A seguir, tendo a Autoridade Policial dado ci&ecirc;ncia a(o) adolescente infrator(a), do nome do(a) respons&aacute;vel pela sua apreens&atilde;o, declinou-lhe, ainda, o pr&oacute;prio nome, tornando-o conhecedor de seus direitos individuais constantes da Lei Federal n&ordm;. 8.069/90 - Estatuto da Crian&ccedil;a e do Adolescente - solicitando que fosse avisada (sua respectiva genitora, em seu endere&ccedil;o residencial.) Interrogado(a) acerca da imputa&ccedil;&atilde;o que lhe &eacute; feita, respondeu:&nbsp;<strong>QUE,</strong>&nbsp;_____________________. Nada mais disse nem lhe foi perguntado. Lido e achado conforme, determinou a Autoridade que fosse encerrado o presente Auto, assinado-o juntamente com o(a) Infrator(a), e comigo, Escriv&atilde;o(&atilde;), que o digitei.</p>
            <p>&nbsp;</p>
            <p>AUTORIDADE POLICIAL: _______________________________________________________</p>
            <p>INFRATOR: ____________________________________________________________________</p>
            <p>ESCRIV&Atilde;O(&Atilde;): ___________________________________________________________________</p>
            `,
    ativo: true,
    tags: ["menores_infratores"],
  },
  {
    id: 39,
    nomePeca:
      "Auto de Apreensão em Flagrante de Ato Infracional - AAFAI (Primeira Testemunha)",
    htmlContent: `
            <p style="text-align: center;"><strong>AUTO DE APREENS&Atilde;O EM FLAGRANTE DE ATO INFRACIONAL</strong><br /><span style="font-size: medium;">(Art. 173, I da Lei n&ordm; 8.069, de 13/07/1990)</span></p>
            <p>&nbsp;</p>
            <p>Em seguida, passou a Autoridade a qualificar e inquirir as testemunhas da forma que se segue:</p>
            <p style="text-align: justify;">Presente a&nbsp;<strong>PRIMEIRA TESTEMUNHA:</strong>&nbsp;<strong>{qualificacao_da_primeira_testemunha}</strong>. Sabendo ler e escrever. Aos costumes disse ____________________. Testemunha compromissada na forma da lei, advertida das penas cominadas ao falso testemunho, prometeu dizer a verdade do que soubesse e lhe fosse perguntado. Inquirida, respondeu:&nbsp;<strong>QUE,</strong>&nbsp;______________________. Nada mais disse nem lhe foi perguntado. Lido e achado conforme, determinou a Autoridade que fosse encerrado o presente depoimento, o qual assina juntamente com o Depoente e comigo Escriv&atilde;o que digitei.</p>
            <p>&nbsp;</p>
            <p>AUTORIDADE POLICIAL: _______________________________________________________</p>
            <p>PRIMEIRA TESTEMUNHA: _____________________________________________________</p>
            <p>ESCRIV&Atilde;O(&Atilde;): ___________________________________________________________________</p>
            `,
    ativo: true,
    tags: ["primeira_testemunha"],
  },
  {
    id: 40,
    nomePeca:
      "Auto de Apreensão em Flagrante de Ato Infracional - AAFAI (Segunda Testemunha)",
    htmlContent: `
            <p style="text-align: center;"><strong>AUTO DE APREENS&Atilde;O EM FLAGRANTE DE ATO INFRACIONAL</strong><br /><span style="font-size: medium;">(Art. 173, I da Lei n&ordm; 8.069, de 13/07/1990)</span></p>
            <p>&nbsp;</p>
            <p>Em seguida, passou a Autoridade a qualificar e inquirir as testemunhas da forma que se segue:</p>
            <p style="text-align: justify;">Presente a&nbsp;<strong>SEGUNDA TESTEMUNHA:</strong>&nbsp;<strong>{qualificacao_da_segunda_testemunha}</strong>. Sabendo ler e escrever. Aos costumes disse ____________________. Testemunha compromissada na forma da lei, advertida das penas cominadas ao falso testemunho, prometeu dizer a verdade do que soubesse e lhe fosse perguntado. Inquirida, respondeu:&nbsp;<strong>QUE,</strong>&nbsp;______________________. Nada mais disse nem lhe foi perguntado. Lido e achado conforme, determinou a Autoridade que fosse encerrado o presente depoimento, o qual assina juntamente com o Depoente e comigo Escriv&atilde;o que digitei.</p>
            <p>&nbsp;</p>
            <p>AUTORIDADE POLICIAL: _______________________________________________________</p>
            <p>PRIMEIRA TESTEMUNHA: _____________________________________________________</p>
            <p>ESCRIV&Atilde;O(&Atilde;): ___________________________________________________________________</p>
            `,
    ativo: true,
    tags: ["segunda_testemunha"],
  },
  {
    id: 41,
    nomePeca: "Auto de Apresentação e Apreensão",
    htmlContent: `
            <p style="text-align: center; font-size: 16px;"><strong>AUTO DE APRESENTA&Ccedil;&Atilde;O E APREENS&Atilde;O</strong></p>
            <p style="text-align: center; font-size: 16px;"><br />(Art. 6&ordm;, II do CPP e Art. 173, II da Lei n&ordm; 8.069, de 13/07/1990)</p>
            <p>&nbsp;</p>
            <p style="text-align: justify; font-size: 16px;">&Agrave;s {hora_atual} horas, do dia {data_mes_e_ano}, nesta Cidade de {cidade_onde_o_procedimento_esta_sendo_realizado}, Estado de Pernambuco, no Cart&oacute;rio desta DELEGACIA DE POL&Iacute;CIA, onde presente se encontrava o(a) Bel.(a) <strong>{nome_do_delegado}</strong>, respectivo(a) Delegado(a), comigo, <strong>{nome_do_escrivao}</strong>, Escriv&atilde;o de seu cargo, ao final assinado, a&iacute; compareceu o&nbsp;<strong>APRESENTADOR</strong>: <strong>{qualificacao_do_condutor}</strong>, o qual, na presen&ccedil;a das&nbsp;<strong>TESTEMUNHAS</strong>: {qualificacao_da_primeira_testemunha}, apresentou &agrave; autoridade Policial o que a seguir passa a expor:</p>
            <p style="text-align: justify; font-size: 16px;">OBJETO APRESENTADO: <strong>{descricao_do_bem_apreendido}</strong></p>
            <p style="text-align: justify; font-size: 16px;">Fato alusivo ao registro do Boletim de Ocorr&ecirc;ncia de n&ordm;&nbsp;<strong>BOE {numero_do_bo}</strong>, lavrado neste &oacute;rg&atilde;o. Nada mais havendo a constar, determinou a Autoridade a real apreens&atilde;o do material apresentado, como apreendido est&aacute; ficando &agrave; sua disposi&ccedil;&atilde;o at&eacute; ulterior delibera&ccedil;&atilde;o, determinando, na sequ&ecirc;ncia, que fosse lavrado o presente Auto, assinando-o juntamente com o Apresentador, as Testemunhas e, comigo, Escriv&atilde;o(&atilde;), que o digitei.</p>
            <p>&nbsp;</p>
            <p style="text-align: justify; font-size: 16px;">AUTORIDADE: __________________________________________________________</p>
            <p style="text-align: justify; font-size: 16px;">APRESENTADOR(A): ____________________________________________________</p>
            <p style="text-align: justify; font-size: 16px;">TESTEMUNHA: _________________________________________________________</p>
            <p style="text-align: justify; font-size: 16px;">TESTEMUNHA: _________________________________________________________</p>
            <p style="text-align: justify; font-size: 16px;">ESCRIV&Atilde;O(&Atilde;): _____________________________________________________________</p>
            <p>&nbsp;</p>
    `,
    ativo: true,
    tags: [
      "apresentadores",
      "primeira_testemunha",
      "segunda_testemunha",
      "apreensoes",
    ],
  },
  {
    id: 42,
    nomePeca: "Auto de Avaliação",
    htmlContent: `
            <p style="text-align: center;"><strong>AUTO DE AVALIA&Ccedil;&Atilde;O</strong><br /> (Art. 172 do CPP)</p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">&Agrave;s {hora_atual} horas, do dia {data_mes_e_ano}, nesta Cidade de {cidade_onde_o_procedimento_esta_sendo_realizado}, Estado de Pernambuco, no Cart&oacute;rio desta Delegacia de Pol&iacute;cia, onde presente se encontrava o(a) Bel(a). {nome_do_delegado}, respectivo(a) Delegado(a), comigo,&nbsp;{nome_do_escrivao}, Escriv&atilde;o(&atilde;) de seu cargo, ao final assinado(a), a&iacute; presentes os Peritos nomeados pela Autoridade Policial: <strong>{qualificacoes_dos_peritos_nomeados}</strong>, os quais assumiram o compromisso legal de procederem, sem dolo nem mal&iacute;cia, consoante o disposto no Art. 172, Caput e Par&aacute;grafo &uacute;nico do C&oacute;digo de Processo Penal, a avalia&ccedil;&atilde;o dos objetos constantes do Auto de Apresenta&ccedil;&atilde;o e Apreens&atilde;o e relacionados no Boletim de Ocorr&ecirc;ncia de n&ordm;.&nbsp;<strong>BOE n&ordm; {numero_do_bo}</strong>, lavrado neste&nbsp;&oacute;rg&atilde;o, conforme abaixo discriminados:</p>
            <p><strong>{descricao_do_bem_apreendido}</strong></p>
            <p style="text-align: justify;">E, como nada mais havia para Avaliar, mandou a Autoridade que fosse lavrado o presente Auto que, depois de lido e achado conforme, o assina &nbsp;juntamente com os Peritos Avaliadores e comigo, Escriv&atilde;o(&atilde;), que o digitei.</p>
            <p>&nbsp;</p>
            <p>AUTORIDADE: ________________________________________________</p>
            <p>PERITO: ______________________________________________________</p>
            <p>PERITO: ______________________________________________________</p>
            <p>ESCRIV&Atilde;O(&Atilde;): ___________________________________________________</p>
            <p>&nbsp;</p>
    `,
    ativo: true,
    tags: ["perito1", "perito2", "apreensoes"],
  },
  {
    id: 43,
    nomePeca: "Auto de Constatação da Natureza e Quantidade da Droga",
    htmlContent: `
            <p style="text-align: center;"><strong>AUTO DE CONSTATA&Ccedil;&Atilde;O DA NATUREZA E QUANTIDADE DA DROGA</strong><br /> (Art. 50 &sect; 1&ordm; da Lei n&ordm; 11.343, de 23/08/2006)</p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">&Agrave;s {hora_atual} horas, do dia {data_mes_e_ano}, nesta Cidade de {cidade_onde_o_procedimento_esta_sendo_realizado}, Estado de Pernambuco, no Cart&oacute;rio desta DELEGACIA DE POL&Iacute;CIA , onde presente se encontrava o(a) Bel.(a) {nome_do_delegado}, respectivo(a) Delegado(a), comigo, {nome_do_escrivao}, Escriv&atilde;o(&atilde;) de seu cargo, ao final assinado(a), aqui presentes os Senhores&nbsp;&nbsp;<strong>{qualificacoes_dos_peritos_nomeados}</strong>&nbsp;, nomeados pela Autoridade para atuar como Perito na realiza&ccedil;&atilde;o do exame a que se refere o &sect; 1&ordm; do Art. 50 da Lei n&ordm;. 11.343/2006, de constata&ccedil;&atilde;o da natureza e quantidade da droga, relativo a&nbsp;<strong>{droga_apreendida}</strong>, apreendida em poder de <strong>{qualificacao_completa_do_imputado}</strong>. E, como aceitaram o encargo, prometendo desempenh&aacute;-lo com zelo e probidade, passaram a examinar a subst&acirc;ncia apresentada, respondendo aos quesitos formulados pela Autoridade:</p>
            <p><strong>1&ordm;. Qual a natureza do material apreendido?</strong>&nbsp;___________________________</p>
            <p><strong>2&ordm;. A&nbsp;droga&nbsp;examinada &eacute; capaz de produzir depend&ecirc;ncia f&iacute;sica e/ ou ps&iacute;quica?</strong>&nbsp;SIM.</p>
            <p><strong>3&ordm;. Outros dados que julgarem &uacute;teis:</strong>&nbsp;PREJUDICADO.</p>
            <p style="text-align: justify;">Nada mais havendo a constar, mandou a Autoridade encerrar o presente Auto, que depois de lido e achado conforme, o assina com os Peritos e, comigo, Escriv&atilde;o(&atilde;), que o digitei.</p>
            <p>&nbsp;</p>
            <p>AUTORIDADE: ___________________________________________________________________________</p>
            <p>1&ordm; PERITO: ______________________________________________________________________________</p>
            <p>2&ordm; PERITO: ______________________________________________________________________________</p>
            <p>ESCRIV&Atilde;O(&Atilde;): ____________________________________________________________________________</p>
            <p>&nbsp;</p>
         `,
    ativo: true,
    tags: ["perito1", "perito2", "autuados"],
  },
  {
    id: 63,
    nomePeca: "Capa Expediente Apartado de Medidas Protetivas",
    htmlContent: `
            <p style="text-align: center; font-size: 14pt;"><strong>MEDIDA PROTETIVA</strong></p>
            <p style="text-align: center; font-size: 14pt;"><strong>{numero_do_procedimento}</strong></p>
            <p>&nbsp;</p>
            <p><strong>TIPIFICA&Ccedil;&Atilde;O: {incidencia_penal}</strong></p>
            <p><strong>&nbsp;</strong></p>
            <p><strong>V&Iacute;TIMA(S):</strong> <strong>{qualificacao_da_vitima}.</strong></p>
            <p><strong>&nbsp;</strong></p>
            <p><strong>AUTOR(ES):</strong>&nbsp;{qualificacao_completa_do_imputado} .</p>
            <p style="text-align: center; font-size: 14pt;"><strong>AUTUA&Ccedil;&Atilde;O</strong></p>
            <p>&nbsp;</p>
            <p style="text-align: justify; text-indent: 0.78in;">Aos {data_mes_e_ano}, autuei o Expediente Apartado de Medidas Protetivas e demais pe&ccedil;as que se seguem. Do que para constar, lavrei este termo. Eu, ______________________ {nome_do_escrivao}, Escriv&atilde;o(&atilde;) que digitei e assino.</p>
            <p><strong>DELEGADO(A):&nbsp;</strong>{nome_do_delegado}</p>
            <p><strong>ESCRIV&Atilde;O(&Atilde;):&nbsp;</strong>{nome_do_escrivao}</p>
            `,
    ativo: true,
    tags: ["vitimas", "autuados"],
  },
  {
    id: 64,
    nomePeca: "Capa Procedimento Especial",
    htmlContent: `
            <p style="text-align: center; font-size: 16pt;"><strong>PROCEDIMENTO ESPECIAL</strong></p>
            <p style="text-align: center; font-size: 14pt;">N&deg;&nbsp;<strong>{numero_do_procedimento}</strong></p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p><strong>TIPIFICA&Ccedil;&Atilde;O</strong>:&nbsp;&nbsp;<strong>{incidencia_penal}</strong></p>
            <p>&nbsp;</p>
            <p><strong>INFRATOR(ES)</strong>:&nbsp;<span style="font-weight: bold;">{qualificacao_completa_do_imputado}.</span></p>
            <p>&nbsp;</p>
            <p><strong>V&Iacute;TIMA(S)</strong>:&nbsp;<strong>{qualificacao_da_vitima}</strong></p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p style="text-align: center; font-size: 16pt;"><strong>A U T U A &Ccedil; &Atilde; O</strong></p>
            <p style="text-align: justify;">Aos&nbsp;<span style="text-indent: 74.88px;">{data_mes_e_ano}</span>, nesta Cidade de {cidade_onde_o_procedimento_esta_sendo_realizado}, Estado de Pernambuco, em Cart&oacute;rio, autuo ____________&nbsp;e demais pe&ccedil;as que adiante seguem, conforme determina&ccedil;&atilde;o da Autoridade Policial. Do que para constar, lavro este termo. Eu,_________________&nbsp;<span style="text-indent: 74.88px;">{nome_do_escrivao}</span>, Escriv&atilde;o(&atilde;) de Pol&iacute;cia, o digitei.</p>
            <p>DELEGADO: <strong>{nome_do_delegado}</strong></p>
            <p>ESCRIV&Atilde;O(&Atilde;):&nbsp;<span style="text-align: justify; text-indent: 74.88px;">{nome_do_escrivao}</span></p>
            `,
    ativo: true,
    tags: ["menores_infratores", "vitimas"],
  },
  {
    id: 67,
    nomePeca: "Capa do Inquérito Policial IP",
    htmlContent: `
            <p style="text-align: center;"><strong>Inqu&eacute;rito Policial</strong></p>
            <p style="text-align: center;"><strong>{numero_do_procedimento}</strong></p>
            <p>&nbsp;</p>
            <p><strong>Envolvidos no Procedimento</strong></p>
            <p><strong>V&iacute;tima(s): {nome_da_vitima}-------------- Imputado(s): {nome_do_imputado}</strong></p>
            <p><strong>&nbsp;</strong></p>
            <p><strong>&nbsp;</strong></p>
            <p><strong>&nbsp;</strong></p>
            <p><strong>&nbsp;</strong></p>
            <p><strong>&nbsp;</strong></p>
            <p>&nbsp;</p>
            <p><strong>Informa&ccedil;&otilde;es Complementares</strong></p>
            <p>Delegado(a) de Instaura&ccedil;&atilde;o: <strong>{nome_do_delegado}</strong></p>
            <p>Escriv&atilde;o(&atilde;) de Instaura&ccedil;&atilde;o: <strong>{nome_do_escrivao}</strong></p>
            <p>Boletim de Ocorr&ecirc;ncia: BOE n&ordm; <strong>{numero_do_bo}</strong></p>
            <p>Data/Hora do Fato: <strong>{data_e_hora_do_fato}</strong></p>
            <p>Tipifica&ccedil;&atilde;o: <strong>{incidencia_penal}</strong></p>
            <p>Principal Motivo: N&Atilde;O INFORMADO</p>
            <p>Data de Instaura&ccedil;&atilde;o: <strong>{data_de_instauracao}</strong></p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
    `,
    ativo: true,
    tags: ["vitimas", "autuados"],
  },
  {
    id: 68,
    nomePeca: "Carimbo de Data, Juntada e Certidão",
    htmlContent: `
            <div style="width: 70%; border: solid 1px black; padding: 15px; padding-bottom: 10px; margin: auto; margin-top: 30px;">
            <p style="text-align: center; font-size: 14pt;"><strong>DATA</strong></p>
            <p style="text-align: center;">Aos {data_mes_e_ano}, recebo estes autos do(a) Delegado(a) que preside o presente Inqu&eacute;rito. Do que, para constar, lavro este termo.</p>
            <p style="text-align: center;">Eu,&nbsp; _________________________ {nome_do_escrivao}, Escriv&atilde;o(&atilde;) que o digitei.</p>
            </div>
            <div style="width: 70%; border: solid 1px black; padding: 15px; padding-bottom: 10px; margin: auto; margin-top: 30px;">
            <p style="text-align: center; font-size: 14pt;"><strong>JUNTADA</strong></p>
            <p style="text-align: center;">Aos {data_mes_e_ano}, fa&ccedil;o juntada dos documentos que adiante se seguem. Do que, para constar, lavro este termo.</p>
            <p style="text-align: center;">Eu,&nbsp; _________________________ {nome_do_escrivao}, Escriv&atilde;o(&atilde;) que o digitei.</p>
            </div>
            <div style="width: 70%; border: solid 1px black; padding: 15px; padding-bottom: 10px; margin: auto; margin-top: 30px;">
            <p style="text-align: center; font-size: 14pt;"><strong>CERTID&Atilde;O</strong></p>
            <p style="text-align: center;">Certifico, que nesta data, dei fiel cumprimento ao despacho retro&nbsp;do Delegado(a) que preside o presente Inqu&eacute;rito, aonde me reporto e DOU F&Eacute;.</p>
            <p style="text-align: center;">Eu,&nbsp; _________________________ {nome_do_escrivao}, Escriv&atilde;o(&atilde;) que o digitei.</p>
            </div>
            <p>&nbsp;</p>
            `,
    ativo: true,
    tags: [],
  },
  {
    id: 69,
    nomePeca: "Carimbo de Remessa",
    htmlContent: `
            <div style="width: 70%; border: solid 1px black; padding: 15px; padding-bottom: 10px; margin: auto; margin-top: 30px;">
            <p style="text-align: center; font-size: 14pt;"><strong>REMESSA</strong></p>
            <p style="text-align: center;">Ao(s) {data_mes_e_ano}, fa&ccedil;o remessa destes autos &agrave; {delegacia_para_onde_o_procedimento_sera_remetido}, para as provid&ecirc;ncias de praxe.</p>
            <p style="text-align: center;">Eu,&nbsp; _________________________ {nome_do_escrivao}, Escriv&atilde;o(&atilde;) que o digitei.</p>
            </div>
            <p style="text-align: center;">&nbsp;</p>
    `,
    ativo: true,
    tags: [],
  },
  {
    id: 70,
    nomePeca: "Carimbo de Remessa - Medidas Protetivas",
    htmlContent: `
            <div style="width: 70%; border: solid 1px black; padding: 15px; padding-bottom: 10px; margin: auto; margin-top: 30px;">
            <p style="text-align: center; font-size: 14pt;"><strong>REMESSA</strong></p>
            <p style="text-align: center;">Ao(s) {data_mes_e_ano}, fa&ccedil;o remessa destes autos &agrave; VARA DE VIOL&Ecirc;NCIA DOM&Eacute;STICA E FAMILIAR, para as provid&ecirc;ncias de praxe.</p>
            <p style="text-align: center;">Eu,&nbsp; _________________________ {nome_do_escrivao}, Escriv&atilde;o(&atilde;) que o digitei.</p>
            </div>
            `,
    ativo: true,
    tags: [],
  },
  {
    id: 85,
    nomePeca: "Comunicação Interna de Remessa de Procedimento (CI de Remessa)",
    htmlContent: `
           <p style="text-align: right; font-size: 16px;">{cidade_onde_o_procedimento_esta_sendo_realizado}, {data_mes_e_ano}</p>
          <p>&nbsp;</p>
          <p style="text-align: left; font-size: 16px;"Comunica&ccedil;&atilde;o Interna n&deg;</p>
          <p>&nbsp;</p>
          <p style="text-align: left; font-size: 16px;">EXMO(A). SR(A).<br />DELEGADO(A) DE POL&Iacute;CIA<br />{delegacia_para_onde_o_procedimento_sera_remetido}</p>
          <p>&nbsp;</p>
          <p style="text-align: left; font-size: 16px;">Senhor(a) Delegado(a),</p>
          <p style="text-align: justify; font-size: 16px;">Cumprimentando-o(a) inicialmente, sirvo-me da presente para encaminhar a V.Ex.&ordf;, o(a)&nbsp;<strong>{tipo_de_procedimento}</strong>&nbsp;de n&ordm;&nbsp;<strong>{numero_do_procedimento}</strong>, instaurado(a) mediante o BOE (Boletim de Ocorr&ecirc;ncia) de n&ordm;&nbsp;<strong>{numero_do_bo}</strong>, em desfavor de&nbsp;<strong>{qualificacao_completa_do_imputado}</strong>, e tendo como v&iacute;tima&nbsp;<strong>{nome_da_vitima}</strong>, fato ocorrido no dia {data_do_fato}, na(o) {endereco_onde_ocorreu_o_fato}, nos termos do&nbsp;{incidencia_penal}.</p>
          <p>&nbsp;</p>
          <p style="text-align: center; font-size: 16px;">Atenciosamente,</p>
          <p>&nbsp;</p>
          <p style="text-align: center; font-size: 16px;"><strong>{nome_do_delegado}</strong><br />Delegado(a) de Pol&iacute;cia</p>
          <p>&nbsp;</p>
      `,
    ativo: true,
    tags: ["autuados", "vitimas"],
  },
  {
    id: 100,
    nomePeca: "Mandado de recolhimento",
    htmlContent: `
            <p style="text-align: center;"><strong>MANDADO DE RECOLHIMENTO</strong><br /><span style="font-size: medium;">(Art. 304 &sect; 1&ordm; do CPP)</span></p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">O(a) Bel(a). {nome_do_delegado}, Delegado(a) de Pol&iacute;cia Titular desta Delegacia de Pol&iacute;cia, no uso de suas atribui&ccedil;&otilde;es legais,&nbsp;</p>
            <p style="text-align: justify;"><strong>DETERMINA&nbsp;</strong>ao Gerente do Pres&iacute;dio {nome_da_unidade_prisional} quem for por este apresentado, indo por ele (ela) assinado, que recolha a esse Estabelecimento Prisional, &agrave; disposi&ccedil;&atilde;o da Justi&ccedil;a P&uacute;blica,&nbsp;<strong><strong>{qualificacao_completa_do_imputado}</strong></strong>, por ter sido preso(a) por for&ccedil;a de Mandado de Pris&atilde;o, como incurso nas penas do&nbsp;<strong>{incidencia_penal}</strong>. E que se cumpra na forma e sob as penas da Lei. Eu, _______________________, {nome_do_escrivao}, Escriv&atilde;o(&atilde;), que o digitei.</p>
            <p>&nbsp;</p>
            <p style="text-align: center;">C U M P R A - S E</p>
            <p style="text-align: center;">&nbsp;</p>
            <p style="text-align: center;">{cidade_onde_o_procedimento_esta_sendo_realizado},&nbsp;{data_mes_e_ano}</p>
            <p style="text-align: center;">&nbsp;</p>
            <p style="text-align: center;">____________________________________________________<br /><strong>{nome_do_delegado}</strong><br />Delegado(a) de Pol&iacute;cia</p>
            `,
    ativo: true,
    tags: ["autuados"],
  },
  {
    id: 101,
    nomePeca: "Nota de Ciência da Imputação da Prática de Ato Infracional",
    htmlContent: `
            <div>
            <p style="text-align: center;"><b style="font-size: 14pt;">NOTA DE CIÊNCIA DA IMPUTAÇÃO DA PRÁTICA DE ATO INFRACIONAL</b><br><font size="3">(Art. 111, I da Lei nº 8.069/90)</font></p>
            <p>&nbsp;</p>
            <p style="text-align: justify; text-indent: 0.78in;">O(a) Bel(a). {nome_do_delegado}, Delegado(a) desta DELEGACIA DE POLÍCIA, no Estado de Pernambuco, em cumprimento ao disposto no Art. 106, Parágrafo único, da Lei Nº. 8.069/90 - Estatuto da Criança e do Adolescente.</p>
            <p style="text-align: justify; text-indent: 0.78in;"><b>FAZ SABER</b> ao adolescente <b>{qualificacao_completa_do_imputado}</b>, já qualificado nos autos, que se encontra Apreendido, por haver praticado ato infracional análogo ao crime previsto no <b>{incidencia_penal}</b>&nbsp;contra <b>{nome_da_vitima}</b>, incorrendo, consequentemente, nas sanções cominadas no <b>delito,</b>&nbsp;tendo sido lavrado o respectivo auto, no qual depuseram como:</p>
            <p style="text-align: justify; text-indent: 0.78in;"><b>CONDUTOR</b>: <b>{qualificacao_do_condutor}</b>.</p>
            <p style="text-align: justify; text-indent: 0.78in;"><b>TESTEMUNHAS</b>:&nbsp; <b>{qualificacao_da_testemunha}</b>.</p>
            <p>&nbsp;</p>
            <p style="text-align: center;">{cidade_onde_o_procedimento_esta_sendo_realizado}, {data_mes_e_ano}.</p>
            <p>&nbsp;</p>
            <p style="text-align: center;">________________________________________________________<br><span style="text-align: justify; text-indent: 74.88px;"><b>{nome_do_delegado}</b></span><br>
            Delegado(a) de Polícia</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            </div>
            <div style="width:70%; margin:auto; text-align: center; border: solid 1px black; padding:20px; padding-bottom:0;">
            <p style="text-align: center; font-size:14pt"><strong>RECIBO</strong></p>
            <p style="text-align: center;">Nesta data, recebi a 1ª Via da presente NOTA DE CIÊNCIA.</p>
            <p style="text-align: center;">Às ______ horas de ______, de __________ de _____ pelo que subscrevo o recibo.</p>
            <p style="text-align: center;"></p>
            <p style="text-align: center;">_______________________________________________________________________________________<br>Assinatura do(a) adolescente infrator(a)</p>
            </div>
            <p>&nbsp;</p>
            `,
    ativo: true,
    tags: [
      "menores_infratores",
      "vitimas",
      "condutores",
      "primeira_testemunha",
      "segunda_testemunha",
    ],
  },
  {
    id: 102,
    nomePeca: "Nota de Ciência das Garantias Constitucionais",
    htmlContent: `
            <p style="text-align: center;"><strong>NOTA DE CI&Ecirc;NCIA DAS GARANTIAS CONSTITUCIONAIS</strong></p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">O(a) Bel(a). {nome_do_delegado}, Delegado(a) de Pol&iacute;cia, no uso de suas atribui&ccedil;&otilde;es legais, <strong>FAZ SABER</strong> a <strong>{qualificacao_completa_do_imputado}</strong><strong>,</strong> preso(a) e autuado(a) em flagrante delito, como incurso nas penas do(s) <strong>{incidencia_penal}</strong>, que lhes s&atilde;o assegurados, dentre outros, os direitos de:</p>
            <p>1 - Ter respeitada a sua integridade f&iacute;sica;</p>
            <p>2 - permanecer calado, sendo-lhe assegurada a assist&ecirc;ncia da fam&iacute;lia e de advogado;</p>
            <p>3 - Comunicar a pris&atilde;o &agrave; fam&iacute;lia ou &agrave; pessoa por ele indicada;</p>
            <p>4 - Identificar os respons&aacute;veis por sua pris&atilde;o ou por seu interrogat&oacute;rio policial.</p>
            <p>&nbsp;</p>
            <p>Dada e lavrada nesta cidade de <strong>{cidade_onde_o_procedimento_esta_sendo_realizado}</strong>, Estado de Pernambuco e nesta Delegacia, aos {data_mes_e_ano}. Eu, {nome_do_escrivao}, Escriv&atilde;o(&atilde;) que o digitei.</p>
            <p>&nbsp;</p>
            <p style="text-align: center;">__________________________________________________<br /> <strong>{nome_do_delegado}</strong><br /> Delegado(a) de Pol&iacute;cia</p>
            <p style="text-align: center;">&nbsp;</p>
            <p style="text-align: center;"><strong>RECIBO</strong></p>
            <p style="text-align: center;">&nbsp;</p>
            <p style="text-align: center;">Recebi a 1&ordf; via desta &agrave;s _____________ horas do dia _____ / ______ / _____________</p>
            <p style="text-align: center;">&nbsp;</p>
            <p style="text-align: center;">Autuado(a): __________________________________________________________________</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
        `,
    ativo: true,
    tags: ["autuados"],
  },
  {
    id: 103,
    nomePeca:
      "Nota de Ciência das Medidas Protetivas e Assistenciais da Lei 11.340/06",
    htmlContent: `
            <p style="text-align: center; font-size: 14pt;"><strong>NOTA DE CI&Ecirc;NCIA DAS MEDIDAS PROTETIVAS E ASSISTENCIAIS <br />DA LEI N&ordm; 11.340/06 LEI MARIA DA PENHA.</strong></p>
            <p>&nbsp;</p>
            <p style="text-align: justify; text-indent: 0.78in;">O(a) Bel(a).&nbsp;<span style="text-indent: 74.88px;"><strong>{nome_do_delegado}</strong></span><span style="text-indent: 0.78in;">, Delegado(a) de Pol&iacute;cia desta DELEGACIA DE POL&Iacute;CIA, no uso de suas atribui&ccedil;&otilde;es legais,</span></p>
            <p><strong>FAZ SABER</strong> &agrave; senhora <strong>{qualificacao_da_vitima}</strong>, v&iacute;tima de viol&ecirc;ncia dom&eacute;stica, do seu direito de requerer Medidas Protetivas e Assistenciais previstas na Lei n&ordm; 11.340/2006, a saber:</p>
            <p><strong>MEDIDAS PROTETIVAS:</strong></p>
            <p>*Suspens&atilde;o/Restri&ccedil;&atilde;o do porte de armas do agressor;</p>
            <p>*Afastamento do agressor do lar, domic&iacute;lio ou local de conviv&ecirc;ncia;</p>
            <p>*N&atilde;o aproxima&ccedil;&atilde;o da ofendida, de seus familiares e das testemunhas, no limite m&iacute;nimo, de ____metros;</p>
            <p>*Proibi&ccedil;&atilde;o de contato com a ofendida, seus familiares e testemunhas;</p>
            <p>*Proibi&ccedil;&atilde;o do agressor de freq&uuml;entar os seguintes locais: endere&ccedil;o residencial/local de trabalho e creche/local de estudo dos filhos, a fim de preservar a integridade f&iacute;sica e psicol&oacute;gica da ofendida;</p>
            <p>*Restri&ccedil;&atilde;o ou suspens&atilde;o de visitas aos filhos menores;</p>
            <p>*Presta&ccedil;&atilde;o de alimentos provisionais ou provis&oacute;rios;</p>
            <p>*Comparecimento do agressor a programas de recupera&ccedil;&atilde;o e reeduca&ccedil;&atilde;o;</p>
            <p>*Acompanhamento psicossocial do agressor, por meio de atendimento individual e/ou em grupo de apoio;</p>
            <p>*Encaminhamento da ofendida e dependentes a programa oficial de prote&ccedil;&atilde;o e atendimento;</p>
            <p>*Recondu&ccedil;&atilde;o da ofendida e dependentes ao respectivo domic&iacute;lio, ap&oacute;s o afastamento do agressor;</p>
            <p>*Afastamento da ofendida do lar, domic&iacute;lio ou local de conviv&ecirc;ncia, sem preju&iacute;zo dos direitos relativos a bens, guarda dos filhos e alimentos;</p>
            <p>*Separa&ccedil;&atilde;o de corpos;</p>
            <p>*Matr&iacute;cula dos dependentes da ofendida em institui&ccedil;&atilde;o de educa&ccedil;&atilde;o b&aacute;sica mais pr&oacute;xima do seu domic&iacute;lio, ou a transfer&ecirc;ncia deles para essa institui&ccedil;&atilde;o, independentemente da exist&ecirc;ncia de vaga;</p>
            <p>*Aux&iacute;lio-aluguel, com valor fixado em fun&ccedil;&atilde;o de sua situa&ccedil;&atilde;o de vulnerabilidade social e econ&ocirc;mica, por per&iacute;odo n&atilde;o superior a 6 (seis) meses;</p>
            <p>*Restitui&ccedil;&atilde;o de bens indevidamente subtra&iacute;dos pelo agressor &agrave; ofendida;</p>
            <p>*Proibi&ccedil;&atilde;o tempor&aacute;ria para celebra&ccedil;&atilde;o de atos e contratos de compra, venda e loca&ccedil;&atilde;o de bens de propriedade comum;</p>
            <p>*Suspens&atilde;o das procura&ccedil;&otilde;es conferidas pela ofendida ao agressor;</p>
            <p>*Comparecimento do agressor a programas de recupera&ccedil;&atilde;o e reeduca&ccedil;&atilde;o;</p>
            <p>*Acompanhamento psicossocial do agressor, por meio de atendimento individual e/ou em grupo de apoio;</p>
            <p>*Presta&ccedil;&atilde;o de cau&ccedil;&atilde;o provis&oacute;ria mediante dep&oacute;sito judicial por perdas e danos materiais decorrentes da viol&ecirc;ncia dom&eacute;stica sofrida.</p>
            <p><strong>&nbsp;</strong></p>
            <p><strong>MEDIDAS ASSISTENCIAIS:</strong></p>
            <p>*A assist&ecirc;ncia &agrave; mulher em situa&ccedil;&atilde;o de viol&ecirc;ncia dom&eacute;stica e familiar ser&aacute; prestada de forma articulada e conforme os princ&iacute;pios e as diretrizes previstos na Lei Org&acirc;nica da Assist&ecirc;ncia Social, no Sistema &Uacute;nico de Sa&uacute;de, no Sistema &Uacute;nico de Seguran&ccedil;a P&uacute;blica, entre outras normas e pol&iacute;ticas p&uacute;blicas de prote&ccedil;&atilde;o, e emergencialmente quando for o caso.</p>
            <p>*Garantia de prote&ccedil;&atilde;o policial.</p>
            <p>*Encaminhamento &agrave; entidade hospitalar e ao Instituto M&eacute;dico Legal.</p>
            <p>*Transporte da Ofendida e de seus dependentes para local seguro, havendo risco de vida.</p>
            <p>*Acompanhamento da ofendida na retirada de seus pertences do local da ocorr&ecirc;ncia ou do domic&iacute;lio familiar.</p>
            <p>*Informa&ccedil;&atilde;o &agrave; ofendida os direitos a ela conferidos nesta Lei e os servi&ccedil;os dispon&iacute;veis</p>
            <p>&nbsp;</p>
            <p style="text-align: center;">__________________________________________________<br /><strong><span style="text-align: justify; text-indent: 74.88px;">{nome_do_delegado}</span><br /></strong>Delegado(a) de Pol&iacute;cia</p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">Em, <strong>{data_mes_e_ano}</strong>, recebi uma via da Nota de Ci&ecirc;ncia, ap&oacute;s sua leitura feita pelo(a) policial desta Delegacia de Pol&iacute;cia.</p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">V&Iacute;TIMA: _________________________________________________________________________________</p>
            `,
    ativo: true,
    tags: ["vitimas"],
  },
  {
    id: 104,
    nomePeca:
      "Nota de Ciência dos Direitos da Mulher em Situação de Violência Doméstia e Familiar (Medidas Protetivas)",
    htmlContent: `
            <p style="text-align: center; font-size: 14pt;"><strong>NOTA DE CI&Ecirc;NCIA DOS DIREITOS DA MULHER EM SITUA&Ccedil;&Atilde;O DE VIOL&Ecirc;NCIA DOM&Eacute;STICA E FAMILIAR</strong><br /> <strong>RELACIONADOS AO ATENDIMENTO PELA AUTORIDADE POLICIAL</strong></p>
            <p>&nbsp;</p>
            <p style="text-align: justify; text-indent: 0.78in;">O(a) Bel(a).&nbsp;<span style="text-indent: 74.88px;"><strong>{nome_do_delegado}</strong></span>, Delegado(a) de Pol&iacute;cia desta DELEGACIA DE POL&Iacute;CIA em cumprimento ao disposto na Lei N&ordm;. 11.340, de 7 de agosto de 2006:</p>
            <p style="text-align: justify; text-indent: 0.78in;"><strong>FAZ SABER</strong> a&nbsp;<strong>{qualificacao_da_vitima}</strong><span style="text-indent: 0.78in;">, v&iacute;tima de viol&ecirc;ncia dom&eacute;stica e familiar, do seu direito &agrave; assist&ecirc;ncia policial preventiva e repressiva, com a ado&ccedil;&atilde;o dos seguintes procedimentos de prote&ccedil;&atilde;o e orienta&ccedil;&atilde;o:</span></p>
            <p style="text-align: justify;">*Na hip&oacute;tese da imin&ecirc;ncia ou da pr&aacute;tica de viol&ecirc;ncia dom&eacute;stica e familiar, com o registro da ocorr&ecirc;ncia, a cont&iacute;gua tomada das provid&ecirc;ncias legais cab&iacute;veis;</p>
            <p style="text-align: justify;">*Garantia de prote&ccedil;&atilde;o policial, quando necess&aacute;ria, associada &agrave; imediata comunica&ccedil;&atilde;o ao Minist&eacute;rio P&uacute;blico e ao Poder Judici&aacute;rio;</p>
            <p style="text-align: justify;">*Encaminhamento a hospital ou posto de sa&uacute;de e ao Instituto M&eacute;dico Legal;</p>
            <p style="text-align: justify;">*Transporte para si e para seus dependentes, para abrigo ou local seguro, diante da hip&oacute;tese de risco de vida;</p>
            <p style="text-align: justify;">*Acompanhamento para garantir a retirada de seus pertences do local da ocorr&ecirc;ncia ou do domic&iacute;lio familiar;</p>
            <p style="text-align: justify;">*Diante do requerimento pela concess&atilde;o de medidas protetivas de urg&ecirc;ncia, remessa do expediente em apartado ao juiz, no prazo de 48 (quarenta e oito) horas.</p>
            <p>&nbsp;</p>
            <p style="text-align: center;">{cidade_onde_o_procedimento_esta_sendo_realizado},&nbsp;<span style="text-align: justify;">{data_mes_e_ano}</span>.</p>
            <p>&nbsp;</p>
            <p style="text-align: center;">_________________________________________________________<br /><strong><span style="text-align: justify; text-indent: 74.88px;">{nome_do_delegado}</span><br /></strong>Delegado(a) de Pol&iacute;cia</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">Em, {data_mes_e_ano}, recebi uma via da Nota de Ci&ecirc;ncia, ap&oacute;s sua leitura feita pelo policial desta Delegacia de Pol&iacute;cia.</p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">V&Iacute;TIMA: ___________________________________________________________________________________</p>
            `,
    ativo: false,
    tags: ["vitimas"],
  },
  {
    id: 105,
    nomePeca: "Nota de Ciência em que a Vítima não deseja Medidas Protetivas",
    htmlContent: `
            <p style="font-size: 14pt; text-align: center;"><strong>NOTA DE CI&Ecirc;NCIA DAS MEDIDAS PROTETIVAS <br />E ASSISTENCIAIS DA LEI 11.340/2006</strong></p>
            <p>&nbsp;</p>
            <p style="text-indent: 0.78in; text-align: justify;">A autoridade policial abaixo assinada e no uso de suas atribui&ccedil;&otilde;es legais, faz ci&ecirc;ncia &agrave; senhora&nbsp;<strong>{qualificacao_da_vitima}</strong><span style="text-indent: 0.78in;">, v&iacute;tima de viol&ecirc;ncia dom&eacute;stica, do seu direito de requerer Medidas Protetivas e Assistenciais previstas na Lei acima citada, a saber:</span></p>
            <p style="text-indent: 0.78in; text-align: justify;">&nbsp;</p>
            <p><strong>MEDIDAS PROTETIVAS:</strong></p>
            <p>*Suspens&atilde;o/Restri&ccedil;&atilde;o do porte de armas do agressor;</p>
            <p>*Afastamento do agressor do lar, domic&iacute;lio ou local de conviv&ecirc;ncia;</p>
            <p>*N&atilde;o aproxima&ccedil;&atilde;o da ofendida, de seus familiares e das testemunhas, no limite m&iacute;nimo, de ____metros;</p>
            <p>*Proibi&ccedil;&atilde;o de contato com a ofendida, seus familiares e testemunhas;</p>
            <p>*Proibi&ccedil;&atilde;o do agressor de freq&uuml;entar os seguintes locais: endere&ccedil;o residencial/local de trabalho e creche/local de estudo dos filhos, a fim de preservar a integridade f&iacute;sica e psicol&oacute;gica da ofendida;</p>
            <p>*Restri&ccedil;&atilde;o ou suspens&atilde;o de visitas aos filhos menores;</p>
            <p>*Presta&ccedil;&atilde;o de alimentos provisionais&nbsp;ou provis&oacute;rios;</p>
            <p>*Comparecimento do agressor a programas de recupera&ccedil;&atilde;o e reeduca&ccedil;&atilde;o;</p>
            <p>*Acompanhamento psicossocial do agressor, por meio de atendimento individual e/ou em grupo de apoio;</p>
            <p>*Encaminhamento da ofendida e dependentes a programa oficial de prote&ccedil;&atilde;o e atendimento;</p>
            <p>*Recondu&ccedil;&atilde;o da ofendida e dependentes ao respectivo domic&iacute;lio, ap&oacute;s o afastamento do agressor;</p>
            <p>*Afastamento da ofendida do lar, domic&iacute;lio ou local de conviv&ecirc;ncia, sem preju&iacute;zo dos direitos relativos a bens, guarda dos filhos e alimentos;</p>
            <p>*Separa&ccedil;&atilde;o de corpos;</p>
            <p>*Matr&iacute;cula dos dependentes da ofendida em institui&ccedil;&atilde;o de educa&ccedil;&atilde;o b&aacute;sica mais pr&oacute;xima do seu domic&iacute;lio, ou a transfer&ecirc;ncia deles para essa institui&ccedil;&atilde;o, independentemente da exist&ecirc;ncia de vaga;</p>
            <p>*Aux&iacute;lio-aluguel, com valor fixado em fun&ccedil;&atilde;o de sua situa&ccedil;&atilde;o de vulnerabilidade social e econ&ocirc;mica, por per&iacute;odo n&atilde;o superior a 6 (seis) meses;</p>
            <p>*Restitui&ccedil;&atilde;o de bens indevidamente subtra&iacute;dos pelo agressor &agrave; ofendida;</p>
            <p>*Proibi&ccedil;&atilde;o tempor&aacute;ria para celebra&ccedil;&atilde;o de atos e contratos de compra, venda e loca&ccedil;&atilde;o de bens de propriedade comum;</p>
            <p>*Suspens&atilde;o das procura&ccedil;&otilde;es conferidas pela ofendida ao agressor;</p>
            <p>*Comparecimento do agressor a programas de recupera&ccedil;&atilde;o e reeduca&ccedil;&atilde;o;</p>
            <p>*Acompanhamento psicossocial do agressor, por meio de atendimento individual e/ou em grupo de apoio;</p>
            <p>*Presta&ccedil;&atilde;o de cau&ccedil;&atilde;o provis&oacute;ria mediante dep&oacute;sito judicial por perdas e danos materiais decorrentes da viol&ecirc;ncia dom&eacute;stica sofrida.</p>
            <p>&nbsp;</p>
            <p><strong>MEDIDAS ASSISTENCIAIS:</strong></p>
            <p>*A assist&ecirc;ncia &agrave; mulher em situa&ccedil;&atilde;o de viol&ecirc;ncia dom&eacute;stica e familiar ser&aacute; prestada de forma articulada e conforme os princ&iacute;pios e as diretrizes previstos na Lei Org&acirc;nica da Assist&ecirc;ncia Social, no Sistema &Uacute;nico de Sa&uacute;de, no Sistema &Uacute;nico de Seguran&ccedil;a P&uacute;blica, entre outras normas e pol&iacute;ticas p&uacute;blicas de prote&ccedil;&atilde;o, e emergencialmente quando for o caso;</p>
            <p>*Garantia de prote&ccedil;&atilde;o policial;</p>
            <p>*Encaminhamento &agrave; entidade hospitalar e ao Instituto M&eacute;dico Legal;</p>
            <p>*Transporte da Ofendida e de seus dependentes para local seguro, havendo risco de vida;</p>
            <p>*Acompanhamento da ofendida na retirada de seus pertences do local da ocorr&ecirc;ncia ou do domic&iacute;lio familiar;</p>
            <p>*Informa&ccedil;&atilde;o &agrave; ofendida dos direitos a ela conferidos nesta Lei e os servi&ccedil;os dispon&iacute;veis.</p>
            <p>&nbsp;</p>
            <p style="text-align: center;">________________________________________________________<br /><strong><span style="text-align: justify; text-indent: 74.88px;">{nome_do_delegado}</span><br /></strong>Delegado(a) de Pol&iacute;cia</p>
            <p>&nbsp;</p>
            <p style="text-align: justify; text-indent: 0.78in;"><strong>Fica cientificada de que ter&aacute; o prazo de 06 (seis) meses, a contar do dia em que veio a saber quem &eacute; o(a) autor(a) do crime</strong><strong style="text-indent: 0.78in;">, para Representar/Requerer Criminalmente contra o(a) imputado(a) ou ajuizar Queixa-Crime atrav&eacute;s de Advogado(a) e/ou Defensor(a) P&uacute;blico(a), nos casos de Crimes em que a A&ccedil;&atilde;o assim o exigir. E que s&oacute; ser&aacute; admitida a Ren&uacute;ncia &agrave; Representa&ccedil;&atilde;o perante o(a) Juiz(a), em audi&ecirc;ncia especialmente designada para tal finalidade, conforme disposi&ccedil;&atilde;o do Art. 16 da Lei 11.340/06.</strong></p>
            <p style="text-align: justify; text-indent: 0.78in;"><strong><u>Declara, neste momento, que n&atilde;o deseja Representar/Requerer C</u></strong><strong><u>riminalmente em desfavor do(a) imputado(a) e nem requer as Medidas Protetivas de Urg&ecirc;ncia.</u></strong></p>
            <p style="text-align: justify; text-indent: 0.78in;">Recebi uma via da Nota de Ci&ecirc;ncia, ap&oacute;s sua leitura feita pelo policial desta Delegacia de Pol&iacute;cia.</p>
            <p style="text-align: justify; text-indent: 0.78in;">{cidade_onde_o_procedimento_esta_sendo_realizado},&nbsp;<span style="text-indent: 0px;">{data_mes_e_ano}</span>.</p>
            <p>&nbsp;</p>
            <p style="text-align: justify; text-indent: 0.78in;">Assinatura: _________________________________________________________________________</p>
            `,
    ativo: true,
    tags: ["vitimas"],
  },
  {
    id: 129,
    nomePeca: "Ofício ao IC Solicitando Perícia em arma de fogo",
    htmlContent: `
            <p style="text-align: right;">{cidade_onde_o_procedimento_esta_sendo_realizado}, {data_mes_e_ano}</p>
            <p>&nbsp;</p>
            <p><strong>Of&iacute;cio n&ordm;</strong></p>
            <p>Ref.: <strong>{tipo_de_procedimento}</strong> n&ordm; <strong>{numero_do_procedimento}</strong><br /> <strong>BOE n&ordm; {numero_do_bo}<br /> </strong>SEI: [SEI]</p>
            <p>&nbsp;</p>
            <p><strong>SR. DIRETOR DO INSTITUTO DE CRIMINAL&Iacute;STICA</strong></p>
            <p>&nbsp;</p>
            <p>Senhor(a) Gestor(a),</p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">Com a finalidade de instruir o Inqu&eacute;rito Policial em tramita&ccedil;&atilde;o nesta Delegacia, remeto a V.S&ordf;., em anexo:</p>
            <p style="text-align: justify;"><strong>{descricao_da_arma_apreendida}</strong>&nbsp;que foi apreendida com&nbsp;<strong>{qualificacao_completa_do_imputado}</strong>.</p>
            <p style="text-align: justify;">O indiv&iacute;duo acima qualificado &eacute; acusado do(s) crime(s) tipificado no&nbsp;<strong>{incidencia_penal}</strong>, fato ocorrido nesta cidade, no dia 04/10/2023, conforme registrado no <strong>BOE n&ordm; {numero_do_bo}</strong>, objeto(s) apresentado(s)/apreendido por {qualificacao_do_condutor}, devendo os senhores Peritos responder aos seguintes quesitos:</p>
            <p style="text-align: justify;"><strong>- Quanto &agrave;(s) arma(s):</strong></p>
            <p style="text-align: justify;">1&ordm;) Qual a natureza, dimens&otilde;es e caracter&iacute;sticas da(s) arma(s) submetida(s) a exame?<br /> 2&ordm;) No estado em que se encontra(m), poderia(m) ter sido utilizada(s) eficazmente para a realiza&ccedil;&atilde;o de disparos?<br /> 3&ordm;) A(s) arma(s) foi(ram) utilizada(s) recentemente?<br /> 4&ordm;) Outras quest&otilde;es ou quesitos que julgarem necess&aacute;rios.</p>
            <p style="text-align: justify;"><strong>- Quanto das muni&ccedil;&otilde;es:</strong></p>
            <p style="text-align: justify;">1&ordm;) Qual a natureza das muni&ccedil;&otilde;es submetidas ao exame?<br /> 2&ordm;) Qual o calibre e a marca das muni&ccedil;&otilde;es?<br /> 3&ordm;) Que tipo de arma poderia t&ecirc;-lo detonado?<br /> 4&ordm;) Outras quest&otilde;es ou quesitos que julgarem necess&aacute;rios.</p>
            <p style="text-align: justify;">O respectivo Laudo Pericial dever&aacute; ser encaminhado &agrave;(ao)&nbsp;<strong>{delegacia_para_onde_o_procedimento_sera_remetido}</strong>.</p>
            <p style="text-align: justify;">&nbsp;</p>
            <p style="text-align: center;">Atenciosamente,</p>
            <p style="text-align: center;">&nbsp;</p>
            <p style="text-align: center;"><strong>{nome_do_delegado}</strong><br /> Delegado(a) de Pol&iacute;cia</p>
    `,
    ativo: true,
    tags: [
      "autuados",
      "condutores",
      "autoridade_endereco",
      "autoridade_cargo",
      "autoridade_tratamento",
    ],
  },
  {
    id: 134,
    nomePeca: "Ofício ao IC Solicitando Realização de Perícia em Veículo",
    htmlContent: `
            <p style="text-align: right;">{cidade_onde_o_procedimento_esta_sendo_realizado}, {data_mes_e_ano}</p>
            <p>&nbsp;</p>
            <p><strong>Of&iacute;cio n&ordm;</strong></p>
            <p>Ref.: <strong>{tipo_de_procedimento}</strong> n&ordm; <strong>{numero_do_procedimento}</strong><br /> <strong>BOE n&ordm; {numero_do_bo}<br /> </strong>SEI: [SEI]</p>
            <p>&nbsp;</p>
            <p><strong>SR. DIRETOR DO INSTITUTO DE CRIMINAL&Iacute;STICA</strong></p>
            <p>&nbsp;</p>
            <p>Senhor(a) Gestor(a),</p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">Cumprimentando-o(a) cordialmente, solicito a V.S&ordf;. que seja procedida&nbsp;<strong>PER&Iacute;CIA EM VE&Iacute;CULO</strong>&nbsp;<strong>{descricao_do_veIculo_que_sera_periciado}</strong> ao tempo em que, informo ainda que tal ve&iacute;culo pertence(ia) a&nbsp;<strong>{qualificacao_completa_do_imputado}</strong>, fato ocorrido em {data_do_fato}, no(a) {endereco_onde_ocorreu_o_fato}.</p>
            <p style="text-align: justify;">O respectivo Laudo Pericial dever&aacute; ser encaminhado &agrave;(ao)&nbsp;<strong>{delegacia_para_onde_o_procedimento_sera_remetido}</strong>.</p>
            <p style="text-align: justify;">&nbsp;</p>
            <p style="text-align: center;">Atenciosamente,</p>
            <p style="text-align: center;">&nbsp;</p>
            <p style="text-align: center;"><strong>{nome_do_delegado}</strong><br /> Delegado(a) de Pol&iacute;cia</p>
    `,
    ativo: true,
    tags: [
      "pessoas",
      "autoridade_endereco",
      "autoridade_cargo",
      "autoridade_tratamento",
    ],
  },
  {
    id: 144,
    nomePeca:
      "Ofício ao Juiz comunicando apreensão e autuação de adolescente em flagrante",
    htmlContent: `
            <p style="text-align: right;"><span style="text-align: justify; text-indent: 74.88px;">{cidade_onde_o_procedimento_esta_sendo_realizado}</span>,&nbsp;<span style="text-align: justify;">{data_mes_e_ano}</span></p>
            <p><strong>Of&iacute;cio n&ordm; 2533303031</strong></p>
            <p>Ref.: <strong>{tipo_de_procedimento} n&ordm;</strong> <strong>{numero_do_procedimento}</strong></p>
            <p>&nbsp;</p>
            <p>&nbsp;<strong>A SUA EXCEL&Ecirc;NCIA O(A) SENHOR(A)</strong></p>
            <p><strong>JUIZ(A) DE DIREITO DO ESTADO DE PERNAMBUCO</strong></p>
            <p>&nbsp;&nbsp;</p>
            <p>Senhor(a) Juiz(a),</p>
            <p>&nbsp;</p>
            <p style="text-align: justify; text-indent: 0.78in;">Cumprindo o disposto no Art. 107, da Lei n&ordm;. 8.069/90, (Estatuto da Crian&ccedil;a e do Adolescente), levo ao conhecimento de V.Exa. que, nesta data, conforme c&oacute;pia do respectivo auto que segue apenso, foi apreendido e autuado em flagrante de ato infracional o adolescente <strong>{qualificacao_completa_do_imputado}</strong>, por ter praticado Infra&ccedil;&atilde;o prevista no (s) <strong>{incidencia_penal}</strong>&nbsp;o qual em seguida, foi recolhido ao {local_onde_o_adolescente_infrator_esta_recolhido} &agrave; disposi&ccedil;&atilde;o da Promotoria de Justi&ccedil;a da Inf&acirc;ncia e da Juventude (ou desta Comarca).</p>
            <p style="text-align: center;">Respeitosamente,</p>
            <p>&nbsp;</p>
            <p style="text-align: center;"><span style="text-align: justify; text-indent: 74.88px;"><strong>{nome_do_delegado}</strong></span></p>
            <p style="text-align: center;">Delegado(a) de Pol&iacute;cia</p>
            `,
    ativo: true,
    tags: ["adolescentes_infratores"],
  },
  {
    id: 147,
    nomePeca: "Ofício ao Juiz Comunicando Cumprimento de Mandado de Prisão",
    htmlContent: `
            <p style="text-align: right;">{cidade_onde_o_procedimento_esta_sendo_realizado}, {data_mes_e_ano}</p>
            <p>&nbsp;</p>
            <p><strong>Of&iacute;cio n&ordm;</strong></p>
            <p>Ref.: <strong>{tipo_de_procedimento}</strong> n&ordm; <strong>{numero_do_procedimento}</strong></p>
            <p>&nbsp;</p>
            <p><strong>A SUA EXCEL&Ecirc;NCIA O(A) SENHOR(A)</strong></p>
            <p><strong>JUIZ(A) DE DIREITO DO ESTADO DE PERNAMBUCO</strong></p>
            <p><strong>PROMOTOR(A) DE JUSTI&Ccedil;A DO ESTADO DE PERNAMBUCO</strong></p>
            <p><strong>DEFENSOR(A) P&Uacute;BLICO DO ESTADO DE PERNAMBUCO</strong></p>
            <p>&nbsp;</p>
            <p>Senhor(a) Juiz(a), Promotor(a) e Defensor(a)</p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">Em conformidade com o que preceitua o Art. 5&ordm;, Inciso LXII, da Constitui&ccedil;&atilde;o Federal, informo a V.Ex&ordf;. que, nesta data, foi dado cumprimento ao Mandado de Pris&atilde;o de n&ordm; <strong>{numero_do_mandado_de_prisao_cumprido}</strong>, cuja c&oacute;pia segue em anexo, expedido por esse MM. Ju&iacute;zo em desfavor de <strong>{qualificacao_completa_do_imputado}</strong>, que foi preso e recolhido ao <strong>{nome_da_unidade_prisional_para_onde_o_preso_sera_recolhido}</strong>.</p>
            <p>&nbsp;</p>
            <p style="text-align: center;">Respeitosamente,</p>
            <p style="text-align: center;">&nbsp;</p>
            <p style="text-align: center;"><strong>{nome_do_delegado}</strong><br /> Delegado(a) de Pol&iacute;cia</p>
            <p>&nbsp;</p>
          `,
    ativo: true,
    tags: ["imputados"],
  },
  {
    id: 153,
    nomePeca: "Ofício apresentando adolescente infrator ao promotor",
    htmlContent: `
            <p style="text-align: right;">{cidade_onde_o_procedimento_esta_sendo_realizado},&nbsp;<span style="text-align: justify; text-indent: 74.88px;">{data_mes_e_ano}</span><br></p>
            <p>&nbsp;</p>
            <p><strong>Ofício nº 2533303039</strong></p>
            <p>Ref.:&nbsp;<b style="text-align: center;">{numero_do_procedimento}</b></p>
            <p>&nbsp;</p>
            <p><strong>A SUA EXCELÊNCIA O(A) SENHOR(A)</strong></p><p><strong>PROMOTOR(A) DE JUSTIÇA DO ESTADO DE PERNAMBUCO</strong></p>
            <p>&nbsp;</p>
            <p>Senhor(a) Promotor(a),</p>
            <p>&nbsp;</p>
            <p style="text-align: justify; text-indent: 0.78in;">Cumprindo o disposto no Art. 175, da Lei nº. 8.069/90 (Estatuto da Criança e do Adolescente), <b>APRESENTO</b> a V.Exª., o adolescente&nbsp;<span style="font-weight: 700; text-align: start; text-indent: 0px;">{qualificacao_completa_do_imputado}</span>, sendo lavrado Boletim de Ocorrência nº <strong>BOE nº {numero_do_bo}</strong>, por ter praticado infração prevista no(s)&nbsp;<strong style="text-align: start; text-indent: 0px;">{incidencia_penal},</strong>&nbsp;conforme cópia do respectivo auto que segue em anexo.</p>
            <p style="text-align: justify; text-indent: 0.78in;">Respeitosamente,</p>
            <p>&nbsp;</p>
            <p style="text-align: center;"><b>{nome_do_delegado}</b></p><p style="text-align: center;">Delegado(a) Polícia</p>
            `,
    ativo: true,
    tags: ["menores_infratores"],
  },
  {
    id: 154,
    nomePeca: "Ofício comunicando AAFAI ao juiz",
    htmlContent: `
            <p style="text-align: right;">{cidade_onde_o_procedimento_esta_sendo_realizado},&nbsp;<span style="text-align: justify; text-indent: 74.88px;">{data_mes_e_ano}</span></p>
            <p>&nbsp;</p>
            <p><strong>Of&iacute;cio n&ordm; 2533303039</strong></p>
            <p>Ref.:&nbsp;<strong style="text-align: center;">{numero_do_procedimento}</strong></p>
            <p>&nbsp;</p>
            <p><strong>A SUA EXCEL&Ecirc;NCIA O(A) SENHOR(A)</strong></p>
            <p><strong>JUIZ(A) DE DIREITO DO ESTADO DE PERNAMBUCO </strong></p>
            <p>&nbsp;</p>
            <p>Senhor(a) Juiz(a),</p>
            <p>&nbsp;</p>
            <p style="text-align: justify; text-indent: 0.78in;">Cumprindo o disposto no Art. 107, da Lei n&ordm;. 8.069/90 (Estatuto da Crian&ccedil;a e do Adolescente), levo ao conhecimento de V.Exa. que, nesta data, conforme c&oacute;pia do respectivo auto que segue apenso, foi apreendido e autuado em flagrante de ato infracional o adolescente <span style="font-weight: bold; text-align: start; text-indent: 0px;">{qualificacao_completa_do_imputado}</span>, sendo lavrado Boletim de Ocorr&ecirc;ncia n&ordm; <strong>BOE n&ordm; {numero_do_bo}</strong>, por ter praticado infra&ccedil;&atilde;o prevista no(s)&nbsp;<strong style="text-align: start; text-indent: 0px;">{incidencia_penal},</strong>&nbsp;conforme c&oacute;pia do respectivo auto que segue em anexo.</p>
            <p style="text-indent: 0.78in; text-align: center;">&nbsp;</p>
            <p style="text-align: center;">Respeitosamente,</p>
            <p>&nbsp;</p>
            <p style="text-align: center;"><strong>{nome_do_delegado}</strong></p>
            <p style="text-align: center;">Delegado(a) Pol&iacute;cia</p>
            `,
    ativo: true,
    tags: ["infratores"],
  },
  {
    id: 155,
    nomePeca: "Ofício comunicando AAFAI ao promotor",
    htmlContent: `
            <p style="text-align: right;">{cidade_onde_o_procedimento_esta_sendo_realizado},&nbsp;<span style="text-align: justify; text-indent: 74.88px;">{data_mes_e_ano}</span></p>
            <p>&nbsp;</p>
            <p><strong>Of&iacute;cio n&ordm; 2533303039</strong></p>
            <p>Ref.:&nbsp;<strong style="text-align: center;">{numero_do_procedimento}</strong></p>
            <p>&nbsp;</p>
            <p><strong>A SUA EXCEL&Ecirc;NCIA O(A) SENHOR(A)</strong></p>
            <p><strong>PROMOTOR(A) DE JUSTIÇA DO ESTADO DE PERNAMBUCO </strong></p>
            <p>&nbsp;</p>
            <p>Senhor(a) Promotor(a),</p>
            <p>&nbsp;</p>
            <p style="text-align: justify; text-indent: 0.78in;">Cumprindo o disposto no Art. 107, da Lei n&ordm;. 8.069/90 (Estatuto da Crian&ccedil;a e do Adolescente), levo ao conhecimento de V.Exa. que, nesta data, conforme c&oacute;pia do respectivo auto que segue apenso, foi apreendido e autuado em flagrante de ato infracional o adolescente <span style="font-weight: bold; text-align: start; text-indent: 0px;">{qualificacao_completa_do_imputado}</span>, sendo lavrado Boletim de Ocorr&ecirc;ncia n&ordm; <strong>BOE n&ordm; {numero_do_bo}</strong>, por ter praticado infra&ccedil;&atilde;o prevista no(s)&nbsp;<strong style="text-align: start; text-indent: 0px;">{incidencia_penal},</strong>&nbsp;conforme c&oacute;pia do respectivo auto que segue em anexo.</p>
            <p style="text-indent: 0.78in; text-align: center;">&nbsp;</p>
            <p style="text-align: center;">Respeitosamente,</p>
            <p>&nbsp;</p>
            <p style="text-align: center;"><strong>{nome_do_delegado}</strong></p>
            <p style="text-align: center;">Delegado(a) Pol&iacute;cia</p>
            `,
    ativo: true,
    tags: ["infratores"],
  },
  {
    id: 156,
    nomePeca: "Ofício comunicando BOC ao juiz",
    htmlContent: `
            <p style="text-align: right;">{cidade_onde_o_procedimento_esta_sendo_realizado},&nbsp;<span style="text-align: justify; text-indent: 74.88px;">{data_mes_e_ano}</span></p>
            <p>&nbsp;</p>
            <p><strong>Of&iacute;cio n&ordm; 2533303039</strong></p>
            <p>Ref.:&nbsp;<strong style="text-align: center;">{numero_do_procedimento}</strong></p>
            <p>&nbsp;</p>
            <p><strong>A SUA EXCEL&Ecirc;NCIA O(A) SENHOR(A)</strong></p>
            <p><strong>JUIZ(A) DE DIREITO DO ESTADO DE PERNAMBUCO </strong></p>
            <p>&nbsp;</p>
            <p>Senhor(a) Juiz(a),</p>
            <p>&nbsp;</p>
            <p style="text-align: justify; text-indent: 0.78in;">Cumprindo o disposto no Art. 107, da Lei n&ordm;. 8.069/90 (Estatuto da Crian&ccedil;a e do Adolescente), levo ao conhecimento de V.Exa. que, nesta data, conforme c&oacute;pia do respectivo auto que segue apenso, foi apreendido e autuado em flagrante de ato infracional o adolescente <span style="font-weight: bold; text-align: start; text-indent: 0px;">{qualificacao_completa_do_imputado}</span>, sendo lavrado Boletim de Ocorr&ecirc;ncia n&ordm; <strong>BOE n&ordm; {numero_do_bo}</strong>, por ter praticado infra&ccedil;&atilde;o prevista no(s)&nbsp;<strong style="text-align: start; text-indent: 0px;">{incidencia_penal},</strong>&nbsp;conforme c&oacute;pia do respectivo auto que segue em anexo.</p>
            <p style="text-indent: 0.78in; text-align: center;">&nbsp;</p>
            <p style="text-align: center;">Respeitosamente,</p>
            <p>&nbsp;</p>
            <p style="text-align: center;"><strong>{nome_do_delegado}</strong></p>
            <p style="text-align: center;">Delegado(a) Pol&iacute;cia</p>
            `,
    ativo: true,
    tags: ["infratores"],
  },
  {
    id: 157,
    nomePeca: "Ofício comunicando BOC ao promotor",
    htmlContent: `
             <p style="text-align: right;">{cidade_onde_o_procedimento_esta_sendo_realizado},&nbsp;<span style="text-align: justify; text-indent: 74.88px;">{data_mes_e_ano}</span></p>
            <p>&nbsp;</p>
            <p><strong>Of&iacute;cio n&ordm; 2533303039</strong></p>
            <p>Ref.:&nbsp;<strong style="text-align: center;">{numero_do_procedimento}</strong></p>
            <p>&nbsp;</p>
            <p><strong>A SUA EXCEL&Ecirc;NCIA O(A) SENHOR(A)</strong></p>
            <p><strong>PROMOTOR(A) DE JUSTIÇA DO ESTADO DE PERNAMBUCO </strong></p>
            <p>&nbsp;</p>
            <p>Senhor(a) Promotor(a),</p>
            <p>&nbsp;</p>
            <p style="text-align: justify; text-indent: 0.78in;">Cumprindo o disposto no Art. 107, da Lei n&ordm;. 8.069/90 (Estatuto da Crian&ccedil;a e do Adolescente), levo ao conhecimento de V.Exa. que, nesta data, conforme c&oacute;pia do respectivo auto que segue apenso, foi apreendido e autuado em flagrante de ato infracional o adolescente <span style="font-weight: bold; text-align: start; text-indent: 0px;">{qualificacao_completa_do_imputado}</span>, sendo lavrado Boletim de Ocorr&ecirc;ncia n&ordm; <strong>BOE n&ordm; {numero_do_bo}</strong>, por ter praticado infra&ccedil;&atilde;o prevista no(s)&nbsp;<strong style="text-align: start; text-indent: 0px;">{incidencia_penal},</strong>&nbsp;conforme c&oacute;pia do respectivo auto que segue em anexo.</p>
            <p style="text-indent: 0.78in; text-align: center;">&nbsp;</p>
            <p style="text-align: center;">Respeitosamente,</p>
            <p>&nbsp;</p>
            <p style="text-align: center;"><strong>{nome_do_delegado}</strong></p>
            <p style="text-align: center;">Delegado(a) Pol&iacute;cia</p>
            `,
    ativo: true,
    tags: [],
  },
  {
    id: 158,
    nomePeca:
      "Ofício comunicando apreensão e autuação de adolescente à família do adolescente",
    htmlContent: `
            <p style="text-align: right;"><strong>{cidade_onde_o_procedimento_esta_sendo_realizado}, {data_mes_e_ano}</strong></p>
            <p>&nbsp;</p>
            <p><strong>Of&iacute;cio n&ordm;</strong></p>
            <p>Ref.: <strong>{tipo_de_procedimento} n&ordm; {numero_do_procedimento}</strong></p>
            <p>&nbsp;</p>
            <p><strong>Ao/&Agrave; Sr(a). {nome_da_pessoa_da_familia_do_preso_que_vai_receber_a_comunicacao}</strong></p>
            <p><strong>_________________________________________________</strong></p>
            <p>GRAU DE PARENTESCO: <strong>{grau_de_parentesco_da_pessoa_da_familia_que_vai_receber_a_comunicacao}</strong></p>
            <p>&nbsp;</p>
            <p>Prezado(a) Senhor(a),</p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">Cumprindo o disposto no Art. 107, da Lei n&ordm;. 8.069/90, (Estatuto da Crian&ccedil;a e do Adolescente), levo ao conhecimento de V.S&ordf;., que, nesta data, foi apreendido e autuado em flagrante de ato infracional o adolescente <strong>{qualificacao_completa_do_imputado}</strong>, por ter praticado Infra&ccedil;&atilde;o prevista no (s) {incidencia_penal}, o qual, em seguida, foi encaminhado ao ___________________________________ &agrave; disposi&ccedil;&atilde;o da Promotoria de Justi&ccedil;a da Inf&acirc;ncia e da Juventude (ou desta Comarca), sendo V.S&ordf;. a pessoa indicada pelo mesmo para que tomasse conhecimento dessa apreens&atilde;o e autua&ccedil;&atilde;o.</p>
            <p>&nbsp;</p>
            <p style="text-align: center;">Atenciosamente,</p>
            <p style="text-align: center;">&nbsp;</p>
            <p style="text-align: center;"><strong>{nome_do_delegado}</strong><br /> Delegado(a) de Pol&iacute;cia</p>
            <p>&nbsp;</p>
            `,
    ativo: true,
    tags: [],
  },
  {
    id: 159,
    nomePeca: "Ofício comunicando prisão em flagrante à Defensoria Pública",
    htmlContent: `
            <p style="text-align: right;">{cidade_onde_o_procedimento_esta_sendo_realizado},&nbsp;<span style="text-align: justify; text-indent: 74.88px;">{data_mes_e_ano}</span></p>
            <p>&nbsp;</p>
            <p><strong>Of&iacute;cio n&ordm; 2533303039</strong></p>
            <p>Ref.:&nbsp;<strong style="text-align: center;">{numero_do_procedimento}</strong></p>
            <p>&nbsp;</p>
            <p><strong>A SUA EXCEL&Ecirc;NCIA O(A) SENHOR(A)</strong></p>
            <p><strong>DEFENSOR(A) DE DIREITO DO ESTADO DE PERNAMBUCO </strong></p>
            <p>&nbsp;</p>
            <p>Senhor(a) Defensor(a),</p>
            <p>&nbsp;</p>
            <p style="text-align: justify; text-indent: 0.78in;">Levo ao conhecimento de V.Ex&ordf;., cumprindo exig&ecirc;ncia estabelecida no Art. 4&ordm;, Inciso X, al&iacute;nea "c" da Lei Complementar N&ordm;. 12 de 27 de dezembro de 1994, que, nesta data, nesta Delegacia de Pol&iacute;cia, conforme c&oacute;pia do respectivo auto, anexa, foi preso e autuado em flagrante delito e recolhido ao _________________________(Pres&iacute;dio ou Cadeia P&uacute;blica ou liberado sob Fian&ccedil;a), pessoa de&nbsp;<strong>{qualificacao_completa_do_imputado}</strong>, por ter infringido o (s) Art(s).&nbsp;<strong>{incidencia_penal},</strong>&nbsp;encontrando-se &agrave; disposi&ccedil;&atilde;o da Justi&ccedil;a P&uacute;blica.</p>
            <p style="text-align: center;">Respeitosamente,</p>
            <p>&nbsp;</p>
            <p style="text-align: center;"><strong>{nome_do_delegado}</strong></p>
            <p style="text-align: center;">Delegado(a) Pol&iacute;cia</p>
            `,
    ativo: true,
    tags: [],
  },
  {
    id: 160,
    nomePeca: "Ofício comunicando prisão em flagrante à família do preso",
    htmlContent: `
            <p style="text-align: right;"><strong>{cidade_onde_o_procedimento_esta_sendo_realizado}, {data_mes_e_ano}</strong></p>
            <p>&nbsp;</p>
            <p><strong>Of&iacute;cio n&ordm;</strong></p>
            <p>Ref.: <strong>{tipo_de_procedimento} n&ordm; {numero_do_procedimento}</strong></p>
            <p>&nbsp;</p>
            <p><strong>Ao/&Agrave; Sr(a). {nome_da_pessoa_da_familia_do_preso_que_vai_receber_a_comunicacao}</strong></p>
            <p><strong>_________________________________________________</strong></p>
            <p>GRAU DE PARENTESCO: <strong>{grau_de_parentesco_da_pessoa_da_familia_que_vai_receber_a_comunicacao}</strong></p>
            <p>&nbsp;</p>
            <p>Prezado(a) Senhor(a),</p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">Em conformidade com o que estabelece o Art. 5&ordm;, Inciso LXII, da Constitui&ccedil;&atilde;o Federal, levo ao conhecimento de V.S&ordf;. que, nesta data, nesta Delegacia de Pol&iacute;cia, foi preso e autuado em flagrante delito <strong>{qualificacao_completa_do_imputado}</strong>, por ter infringido o(s) Art.(s)&nbsp;<strong>{incidencia_penal}</strong>, e, ap&oacute;s as formalidades legais, foi entregue ao N&uacute;cleo da PMPE do TJPE a fim de ser apresentado na Audi&ecirc;ncia de Cust&oacute;dia no F&oacute;rum de CAURARU/PE.</p>
            <p>&nbsp;</p>
            <p style="text-align: center;">Atenciosamente,</p>
            <p style="text-align: center;">&nbsp;</p>
            <p style="text-align: center;"><strong>{nome_do_delegado}</strong><br /> Delegado(a) de Pol&iacute;cia</p>
            <p>&nbsp;</p>
            `,
    ativo: true,
    tags: ["autuados"],
  },
  {
    id: 173,
    nomePeca: "Ofício encaminhando Medidas Protetivas - Lei 11.340/2006",
    htmlContent: `
            <p style="text-align: right;">{cidade_onde_o_procedimento_esta_sendo_realizado}, {data_mes_e_ano}</p>
            <p>&nbsp;</p>
            <p><strong>Of&iacute;cio n&ordm; 2533303044</strong></p>
            <p>Ref.: MEDIDA PROTETIVA n&ordm; <strong>{numero_do_procedimento}</strong></p>
            <p>&nbsp;</p>
            <p><strong>A SUA EXCEL&Ecirc;NCIA O(A) SENHOR(A)</strong></p>
            <p><strong>JUIZ(A) DE DIREITO DO ESTADO DE PERNAMBUCO</strong></p>
            <p>&nbsp;</p>
            <p>Senhor(a) Juiz(a),</p>
            <p>&nbsp;</p>
            <p style="text-align: justify; text-indent: 0.78in;">Dando cumprimento ao que preceitua o Inciso III, Artigo 12 da Lei 11.340/06, remeto em expediente de Medidas Protetivas, no qual figura como agressor a pessoa de: <strong>{qualificacao_completa_do_imputado}</strong> com pedido da Ofendida: <strong>{qualificacao_da_vitima}</strong>.</p>
            <p>&nbsp;</p>
            <p style="text-align: center;">Atenciosamente,</p>
            <p>&nbsp;</p>
            <p style="text-align: center;"><strong>{nome_do_delegado}</strong><br />Delegado(a) de Pol&iacute;cia</p>
            `,
    ativo: true,
    tags: [],
  },
  {
    id: 191,
    nomePeca: "Ofício solicitando exame de constatação de droga",
    htmlContent: `
            <p style="text-align: right;">{cidade_onde_o_procedimento_esta_sendo_realizado}, {data_mes_e_ano}</p>
            <p>&nbsp;</p>
            <p><strong>Of&iacute;cio n&ordm;</strong></p>
            <p>Ref.: <strong>{tipo_de_procedimento}</strong> n&ordm; <strong>{numero_do_procedimento}</strong><br /> <strong>BOE n&ordm; {numero_do_bo}<br /> </strong>SEI: [SEI]</p>
            <p>&nbsp;</p>
            <p><strong>SR. DIRETOR DO INSTITUTO DE CRIMINAL&Iacute;STICA</strong></p>
            <p>&nbsp;</p>
            <p>Senhor(a) Gestor(a),</p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">Encaminho a V.S&ordf;., para que seja procedido o&nbsp;<strong>EXAME DE CONSTATA&Ccedil;&Atilde;O DA NATUREZA E QUANTIDADE DE DROGA,</strong>&nbsp;de conformidade com o que preceitua o &sect; 1&ordm; do Art. 50 da Lei n&ordm;. 11.343/2006, um envelope contendo <strong>{droga_apreendida}</strong>, apreendida em poder de <strong>{qualificacao_completa_do_imputado}</strong>, fato verificado em &aacute;rea da circunscri&ccedil;&atilde;o desta Delegacia de Pol&iacute;cia.</p>
            <p style="text-align: justify;">Vale salientar que, o referido exame, tem por objetivo informar a esta Autoridade Policial, a natureza, as caracter&iacute;sticas, a identifica&ccedil;&atilde;o e quantidade do material apresentado, visando suporte probat&oacute;rio m&iacute;nimo, para a lavratura do competente Auto de Pris&atilde;o em Flagrante Delito.</p>
            <p style="text-align: justify;">&nbsp;</p>
            <p style="text-align: center;">Atenciosamente,</p>
            <p style="text-align: center;">&nbsp;</p>
            <p style="text-align: center;"><strong>{nome_do_delegado}</strong><br /> Delegado(a) de Pol&iacute;cia</p>
    `,
    ativo: true,
    tags: [
      "autuados",
      "autoridade_endereco",
      "autoridade_cargo",
      "autoridade_tratamento",
    ],
  },

  {
    id: 193,
    nomePeca: "Ofício solicitando exame definitivo de droga (maconha)",
    htmlContent: `
            <p style="text-align: right; font-size: 16px;"><strong>{cidade_onde_o_procedimento_esta_sendo_realizado}, {data_mes_e_ano}</strong></p>
            <p>&nbsp;</p>
            <p style="text-align: left; font-size: 16px;"><strong>Of&iacute;cio n&ordm;</strong></p>
            <p style="text-align: left; font-size: 16px;">Ref.: <strong>{tipo_de_procedimento} n&ordm; {numero_do_procedimento}</strong><br /><strong>BOE n&ordm; {numero_do_bo}</strong><br />SEI: [SEI]</p>
            <p>&nbsp;</p>
            <p style="text-align: left; font-size: 16px;"><strong>SR. DIRETOR DO INSTITUTO DE CRIMINAL&Iacute;STICA</strong></p>
            <p>&nbsp;</p>
            <p style="text-align: left; font-size: 16px;">Senhor(a) Gestor(a),</p>
            <p>&nbsp;</p>
            <p style="text-align: justify; font-size: 16px;">Encaminho a V. Sa., com a finalidade de ser realizado o&nbsp;<strong>EXAME DEFINITIVO DE DROGA</strong>, de conformidade com o que preceitua o &sect; 2&ordm; do Art. 50 da Lei Federal n&ordm;. 11.343/2006, um envelope contendo erva de colora&ccedil;&atilde;o castanha esverdeada, que se presume ser "Maconha", cientificamente conhecida por "<em>Cannabis Sativa Lineu</em>", por ter sido apreendido(a) <strong>{droga_apreendida}</strong>, em poder de: <strong>{qualificacao_completa_do_imputado}</strong>, fato que ensejou sua autua&ccedil;&atilde;o em flagrante delito, devendo os senhores Peritos responder aos seguintes quesitos:</p>
            <p style="text-align: left; font-size: 16px;">1&ordm;) A Erva apreendida &eacute; de fato "Maconha"?</p>
            <p style="text-align: left; font-size: 16px;">2&ordm;) Qual sua hist&oacute;ria, seu conceito, seu nome cient&iacute;fico e sua f&oacute;rmula qu&iacute;mica?</p>
            <p style="text-align: left; font-size: 16px;">3&ordm;) &Eacute; o material proscrito no Brasil?</p>
            <p style="text-align: left; font-size: 16px;">4&ordm;) Especialmente &eacute; manifesto o seu princ&iacute;pio ativo, capacitando-a a causar depend&ecirc;ncia f&iacute;sica e/ou ps&iacute;quica?</p>
            <p style="text-align: left; font-size: 16px;">5&ordm;) A "Maconha", denomina&ccedil;&atilde;o da cientificamente conhecida "Cannabis Sativa Lineu", acha-se classificada como subst&acirc;ncia entorpecente, de acordo com o Decreto Lei Federal de n&ordm;. 891/38 de 25 de novembro de 1938?</p>
            <p style="text-align: left; font-size: 16px;">6&ordm;) Podem os senhores Peritos informar se o material apreendido e examinado encontra-se em fase de flora&ccedil;&atilde;o ou sementa&ccedil;&atilde;o?</p>
            <p>&nbsp;</p>
            <p style="text-align: justify; font-size: 16px;">Esclare&ccedil;o, ainda, que o competente Laudo, ir&aacute; instruir Inqu&eacute;rito Policial iniciado por Auto de Pris&atilde;o em Flagrante Delito e que dever&aacute; ser encaminhado &agrave; <strong>{delegacia_para_onde_o_procedimento_sera_remetido}</strong>.</p>
            <p>&nbsp;</p>
            <p style="text-align: center; font-size: 16px;">Atenciosamente,</p>
            <p>&nbsp;</p>
            <p style="text-align: center; font-size: 16px;"><strong>{nome_do_delegado}</strong><br />Delegado(a) de Pol&iacute;cia</p>
        `,
    ativo: true,
    tags: [
      "autuados",
      "autoridade_endereco",
      "autoridade_cargo",
      "autoridade_tratamento",
    ],
  },
  {
    id: 203,
    nomePeca:
      "Ofício à Família do Preso Comunicando Cumprimento de Mandado de Prisão",
    htmlContent: `
            <p style="text-align: right;"><strong>{cidade_onde_o_procedimento_esta_sendo_realizado}, {data_mes_e_ano}</strong></p>
            <p>&nbsp;</p>
            <p>Ref.: <strong>{tipo_de_procedimento} n&ordm; {numero_do_procedimento}</strong></p>
            <p>&nbsp;</p>
            <p><strong>Ao/&Agrave; Sr(a). {nome_da_pessoa_da_familia_do_preso_que_vai_receber_a_comunicacao}</strong></p>
            <p><strong>_________________________________________________</strong></p>
            <p>GRAU DE PARENTESCO: <strong>{grau_de_parentesco_da_pessoa_da_familia_que_vai_receber_a_comunicacao}</strong></p>
            <p>&nbsp;</p>
            <p>Prezado(a) Senhor(a),</p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">Em conformidade com o que estabelece o Art. 5&ordm;, Inciso LXII, da Constitui&ccedil;&atilde;o Federal, levo ao conhecimento de V.S&ordf;. que, nesta data, nesta Delegacia de Pol&iacute;cia, foi preso&nbsp;<strong>{qualificacao_completa_do_imputado}</strong>, por for&ccedil;a de mandado de pris&atilde;o,por ter infringido o(s) Art.(s)&nbsp;<strong>{incidencia_penal}</strong>, e, ap&oacute;s as formalidades legais, foi entregue ao N&uacute;cleo da PMPE do TJPE a fim de ser apresentado na Audi&ecirc;ncia de Cust&oacute;dia no F&oacute;rum de CAURARU/PE.</p>
            <p>&nbsp;</p>
            <p style="text-align: center;">Atenciosamente,</p>
            <p style="text-align: center;">&nbsp;</p>
            <p style="text-align: center;"><strong>{nome_do_delegado}</strong><br /> Delegado(a) de Pol&iacute;cia</p>
            <p>&nbsp;</p>
    `,
    ativo: true,
    tags: ["preso"],
  },
  {
    id: 208,
    nomePeca: "Pedido de Medidas Protetivas de Urgência (Lei 11.340/2006)",
    htmlContent: `
            <p style="text-align: center; font-size: 14pt;"><strong>PEDIDO DE MEDIDAS PROTETIVAS DE URG&Ecirc;NCIA</strong></p>
            <p style="text-align: center; font-size: 14pt;"><strong>{numero_do_procedimento}</strong></p>
            <p>&nbsp;</p>
            <p><strong># TIPIFICA&Ccedil;&Atilde;O</strong>: <strong>{incidencia_penal}</strong></p>
            <p><strong># QUALIFICA&Ccedil;&Atilde;O DA OFENDIDA</strong>:&nbsp;</p>
            <p><strong>{qualificacao_da_vitima}</strong></p>
            <p><strong># QUALIFICA&Ccedil;&Atilde;O DO AGRESSOR</strong>:</p>
            <p><strong style="text-align: justify;">{qualificacao_completa_do_imputado}</strong></p>
            <p><strong># QUALIFICA&Ccedil;&Atilde;O DOS DEPENDENTES</strong></p>
            <p><strong>Nome</strong>: __________________________________________ <strong>Idade</strong>:________________<br /><strong>Endere&ccedil;o</strong>: _____________________________________________________________<br /><strong>Bairro</strong>: ____________________________ <strong>Cidade</strong>:____________________________&nbsp;<br /><strong>Telefone</strong>: ______________________________ <strong>CEP</strong> : _________________________</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p><strong># FATOS:&nbsp;</strong><em>RELATO BO PMPE: "QUANDO DE SERVI&Ccedil;O ORDIN&Aacute;RIO NA GT 4201 POR INICIATIVA PR&Oacute;PRIA REALIZAMOS UMA ABORDAGEM AO INDIV&Iacute;DUO DE NOME EDUARDO, QUE TRANSITAVA A P&Eacute; NO ENDERE&Ccedil;O CITADO, E COM ELE FOI ENCONTRADO DOIS CIGARROS DE SUBST&Acirc;NCIA AN&Aacute;LOGA A MACONHA. O INDIV&Iacute;DUO FOI CONDUZIDO PARA A DELEGACIA PARA SEREM TOMADAS AS MEDIDAS CAB&Iacute;VEIS. FOI FEITO O USO DE ALGEMAS PARA RESGARDAR A INTEGRIDADE DE TODOS. O ENVOLVIDO NAO SOFREU NENHUM TIPO DE AGRESS&Atilde;O F&Iacute;SICA OU PSICOL&Oacute;GICA. "</em></p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p><strong># PEDIDO DA MEDIDA PROTETIVA</strong></p>
            <p style="text-align: justify;">*Suspens&atilde;o/Restri&ccedil;&atilde;o do porte de armas do agressor;</p>
            <p style="text-align: justify;">*Afastamento do agressor do lar, domic&iacute;lio ou local de conviv&ecirc;ncia;</p>
            <p style="text-align: justify;">*N&atilde;o aproxima&ccedil;&atilde;o da ofendida, de seus familiares e das testemunhas, no limite m&iacute;nimo, de ____metros;</p>
            <p style="text-align: justify;">*Proibi&ccedil;&atilde;o de contato com a ofendida, seus familiares e testemunhas;</p>
            <p style="text-align: justify;">*Proibi&ccedil;&atilde;o do agressor de freq&uuml;entar os seguintes locais: endere&ccedil;o residencial/local de trabalho e creche/local de estudo dos filhos, a fim de preservar a integridade f&iacute;sica e psicol&oacute;gica da ofendida;</p>
            <p style="text-align: justify;">*Restri&ccedil;&atilde;o ou suspens&atilde;o de visitas aos filhos menores;</p>
            <p style="text-align: justify;">*Presta&ccedil;&atilde;o de alimentos provisionais ou provis&oacute;rios;</p>
            <p style="text-align: justify;">*Comparecimento do agressor a programas de recupera&ccedil;&atilde;o e reeduca&ccedil;&atilde;o;</p>
            <p style="text-align: justify;">*Acompanhamento psicossocial do agressor, por meio de atendimento individual e/ou em grupo de apoio;</p>
            <p style="text-align: justify;">*Encaminhamento da ofendida e dependentes a programa oficial de prote&ccedil;&atilde;o e atendimento;</p>
            <p style="text-align: justify;">*Recondu&ccedil;&atilde;o da ofendida e dependentes ao respectivo domic&iacute;lio, ap&oacute;s o afastamento do agressor;</p>
            <p style="text-align: justify;">*Afastamento da ofendida do lar, domic&iacute;lio ou local de conviv&ecirc;ncia, sem preju&iacute;zo dos direitos relativos a bens, guarda dos filhos e alimentos;</p>
            <p style="text-align: justify;">*Separa&ccedil;&atilde;o de corpos;</p>
            <p style="text-align: justify;">*Matr&iacute;cula dos dependentes da ofendida em institui&ccedil;&atilde;o de educa&ccedil;&atilde;o b&aacute;sica mais pr&oacute;xima do seu domic&iacute;lio, ou a transfer&ecirc;ncia deles para essa institui&ccedil;&atilde;o, independentemente da exist&ecirc;ncia de vaga;</p>
            <p style="text-align: justify;">*Aux&iacute;lio-aluguel, com valor fixado em fun&ccedil;&atilde;o de sua situa&ccedil;&atilde;o de vulnerabilidade social e econ&ocirc;mica, por per&iacute;odo n&atilde;o superior a 6 (seis) meses;</p>
            <p style="text-align: justify;">*Restitui&ccedil;&atilde;o de bens indevidamente subtra&iacute;dos pelo agressor &agrave; ofendida;</p>
            <p style="text-align: justify;">*Proibi&ccedil;&atilde;o tempor&aacute;ria para celebra&ccedil;&atilde;o de atos e contratos de compra, venda e loca&ccedil;&atilde;o de bens de propriedade comum;</p>
            <p style="text-align: justify;">*Suspens&atilde;o das procura&ccedil;&otilde;es conferidas pela ofendida ao agressor;</p>
            <p style="text-align: justify;">*Comparecimento do agressor a programas de recupera&ccedil;&atilde;o e reeduca&ccedil;&atilde;o;</p>
            <p style="text-align: justify;">*Acompanhamento psicossocial do agressor, por meio de atendimento individual e/ou em grupo de apoio;</p>
            <p style="text-align: justify;">*Presta&ccedil;&atilde;o de cau&ccedil;&atilde;o provis&oacute;ria mediante dep&oacute;sito judicial por perdas e danos materiais decorrentes da viol&ecirc;ncia dom&eacute;stica sofrida.</p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">Em, {data_mes_e_ano}, recebi uma via da Nota de Ci&ecirc;ncia, ap&oacute;s sua leitura feita pelo(a) policial desta Delegacia de Pol&iacute;cia, e optei por solicitar as medidas protetivas acima elencadas.</p>
            <p style="text-align: justify;">Pede Deferimento.</p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">{cidade_onde_o_procedimento_esta_sendo_realizado}, {data_mes_e_ano}</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>_________________________________________________________________________________<br />Assinatura da V&iacute;tima:</p>
            <p style="text-align: justify;">Segue anexo: <strong>B.O n&ordm; BOE n&ordm; {numero_do_bo}</strong>e c&oacute;pias de documentos (LEI N&ordm; 11.340/2006).</p>
            `,
    ativo: true,
    tags: ["vitimas", "autuados"],
  },
  {
    id: 211,
    nomePeca: "Portaria Instauradora de Inquérito Policial (de Ofício)",
    htmlContent: `
            <p style="text-align: center;"><strong>PORTARIA</strong></p>
            <p style="text-align: justify;">A POL&Iacute;CIA CIVIL DO ESTADO DE PERNAMBUCO, atrav&eacute;s da Autoridade Policial que a esta subscreve, com fulcro no Art. 144, &sect;4&deg;, da Constitui&ccedil;&atilde;o Federal de 1988 c/c Art. 4&deg; e seguintes do C&oacute;digo de Processo Penal p&aacute;trio vigente, tomou conhecimento, atrav&eacute;s do Boletim de Ocorr&ecirc;ncia n&ordm;&nbsp;<strong>BOE n&ordm; {numero_do_bo}</strong>, que, no dia {data_do_fato}, no(a) {endereco_onde_ocorreu_o_fato}, ocorreu o crime tipificado no&nbsp;<strong>{incidencia_penal}</strong>, tendo como autor(es)&nbsp;<strong>{qualificacao_completa_do_imputado} </strong>e por v&iacute;tima(s)&nbsp;<strong>{qualificacao_da_vitima}</strong>, determino&nbsp;ao(&agrave;) Senhor(a) Escriv&atilde;o(&atilde;) de Pol&iacute;cia de seu cargo&nbsp;que A. e R. esta, seja instaurado o competente Inqu&eacute;rito Policial,&nbsp;prosseguindo-se nas demais dilig&ecirc;ncias at&eacute; a completa elucida&ccedil;&atilde;o do fato delituoso e de sua autoria, cujo hist&oacute;rico do boletim de ocorr&ecirc;ncia em ep&iacute;grafe explicita ind&iacute;cios de conduta t&iacute;pica, trazendo o seguinte relato:&nbsp;<em>{cole_aqui_a_descricao_do_bo}.</em></p>
            <p style="text-align: center;">&nbsp;</p>
            <p style="text-align: center;"><strong>C U M P R A - S E</strong></p>
            <p style="text-align: center;">&nbsp;</p>
            <p style="text-align: center;"><strong>{cidade_onde_o_procedimento_esta_sendo_realizado}, {data_mes_e_ano}</strong></p>
            <p style="text-align: center;">&nbsp;</p>
            <p style="text-align: center;"><strong>{nome_do_delegado}</strong><br /> Delegado(a) de Pol&iacute;cia</p>
            <p>&nbsp;</p>
    `,
    ativo: true,
    tags: ["autuados", "vitimas"],
  },
  {
    id: 212,
    nomePeca:
      "Portaria Instauradora de Procedimento Especial de Adolescente Infrator",
    htmlContent: `
            <p style="text-align: center;"><strong>PROCEDIMENTO ESPECIAL DE ADOLESCENTE INFRATOR</strong></p>
            <p style="text-align: justify;">A POL&Iacute;CIA CIVIL DO ESTADO DE PERNAMBUCO, atrav&eacute;s da Autoridade Policial que a esta subscreve, com fulcro no Art. 144, &sect;4&deg;, da Constitui&ccedil;&atilde;o Federal de 1988 c/c Art. 4&deg; e seguintes do C&oacute;digo de Processo Penal p&aacute;trio vigente, tomou conhecimento, atrav&eacute;s do Boletim de Ocorr&ecirc;ncia n&ordm;&nbsp;<strong>BOE n&ordm; {numero_do_bo}</strong>, que, no dia {data_do_fato}, no(a) {endereco_onde_ocorreu_o_fato}, ocorreu o crime tipificado no&nbsp;<strong>{incidencia_penal}</strong>, tendo como autor(es)&nbsp;<strong>{qualificacao_completa_do_imputado} </strong>e por v&iacute;tima(s)&nbsp;<strong>{qualificacao_da_vitima}</strong>, determino&nbsp;ao(&agrave;) Senhor(a) Escriv&atilde;o(&atilde;) de Pol&iacute;cia de seu cargo&nbsp;que A. e R. esta, seja instaurado o competente Procedimento Especial,&nbsp;prosseguindo-se nos demais diligenciamentos até completa elucidação do Ato Infracional, suas circunstâncias e autoria, cujo hist&oacute;rico do boletim de ocorr&ecirc;ncia em ep&iacute;grafe traz o seguinte relato:&nbsp;<em>{cole_aqui_a_descricao_do_bo}.</em></p>
            <p style="text-align: center;">&nbsp;</p>
            <p style="text-align: center;"><strong>C U M P R A - S E</strong></p>
            <p style="text-align: center;">&nbsp;</p>
            <p style="text-align: center;"><strong>{cidade_onde_o_procedimento_esta_sendo_realizado}, {data_mes_e_ano}</strong></p>
            <p style="text-align: center;">&nbsp;</p>
            <p style="text-align: center;"><strong>{nome_do_delegado}</strong><br /> Delegado(a) de Pol&iacute;cia</p>
            <p>&nbsp;</p>
    `,
    ativo: true,
    tags: [],
  },
  {
    id: 214,
    nomePeca: "Portaria de nomeação e termo de compromisso de peritos",
    htmlContent: `
            <p style="text-align: justify;">O(a) Bel(a). {nome_do_delegado}, Delegado(a) de Pol&iacute;cia Titular desta Delegacia, no uso de suas atribui&ccedil;&otilde;es, na falta de Peritos Oficiais e ocorrendo a necessidade de se proceder a(o) {tipo_do_exame_peritos_nomeados}, nomeia para atuar como Peritos, de acordo com o disposto no Art. 159, &sect;&sect; 1&ordm; e 2&ordm;, do C&oacute;digo de Processo Penal, os Senhores <strong>{qualificacoes_dos_peritos_nomeados}</strong>, os quais dever&atilde;o prestar o compromisso legal de estilo.</p>
            <p>&nbsp;</p>
            <p style="text-align: center;">C U M P R A - S E</p>
            <p>&nbsp;</p>
            <p style="text-align: center;"><strong>{cidade_onde_o_procedimento_esta_sendo_realizado}, {data_mes_e_ano}</strong></p>
            <p style="text-align: center;"><strong>{nome_do_delegado}</strong><br /> Delegado (a) de Pol&iacute;cia</p>
            <p style="text-align: center;">&nbsp;</p>
            <p>&nbsp;</p>
            <p style="text-align: center;"><strong>TERMO DE COMPROMISSO</strong></p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">Aos {data_mes_e_ano}, nesta Cidade de {cidade_onde_o_procedimento_esta_sendo_realizado}, Estado de Pernambuco, no Cart&oacute;rio desta Delegacia de Pol&iacute;cia, onde presente se encontrava o(a) Bel(a). {nome_do_delegado}, respectivo(a) Delegado(a), comigo {nome_do_escrivao}, Escriv&atilde;o(&atilde;) de seu cargo, ao final assinado(a), a&iacute; compareceram os Peritos nomeados <strong>{qualificacoes_dos_peritos_nomeados}</strong>, a quem a Autoridade deferiu o compromisso legal de bem e fielmente desempenharem o encargo, incumbindo-os de procederem a(o) {tipo_do_exame_peritos_nomeados}, descrevendo com verdade, sem dolo ou mal&iacute;cia, o que encontrarem.</p>
            <p style="text-align: justify;">E, como aceitassem o encargo, mandou a Autoridade lavrar este Termo, que lido e achado conforme, o assina juntamente com os Peritos e comigo, Escriv&atilde;o(&atilde;), que o digitei.</p>
            <p>&nbsp;</p>
            <p>AUTORIDADE: ____________________________________________________________</p>
            <p>PERITO: __________________________________________________________________</p>
            <p>PERITO: __________________________________________________________________</p>
            <p>ESCRIV&Atilde;O(&Atilde;): ______________________________________________________________</p>
            <p>&nbsp;</p>
    `,
    ativo: true,
    tags: ["perito1", "perito2"],
  },
  {
    id: 215,
    nomePeca: "Portaria e termo de compromisso de escrivão ad hoc",
    htmlContent: `
            <p style="text-align: center;"><strong>P O R T A R I A</strong></p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">O(a) Bel(a).&nbsp;{nome_do_delegado}, Delegado(a) de Pol&iacute;cia Titular / Adjunto(a) desta Delegacia, no uso de suas atribui&ccedil;&otilde;es, ante a falta de Escriv&atilde;o do quadro e pela necessidade de se proceder a instaura&ccedil;&atilde;o de Inqu&eacute;rito Policial para esclarecer os fatos relatados no Boletim de Ocorr&ecirc;ncia n&ordm;&nbsp;<strong>BOE n&ordm; {numero_do_bo}</strong>, lavrado nesta Delegacia, nomeia, para atuar como Escriv&atilde;o(&atilde;) Ad Hoc o(a) Agente de Pol&iacute;cia,&nbsp;<strong>{qualificacao_do_escrivao_ad_hoc}</strong>, o(a) qual dever&aacute; prestar o compromisso legal de estilo.</p>
            <p>&nbsp;</p>
            <p style="text-align: center;">C U M P R A - S E</p>
            <p style="text-align: center;">&nbsp;</p>
            <p style="text-align: center;"><strong>{cidade_onde_o_procedimento_esta_sendo_realizado}, {data_mes_e_ano}</strong></p>
            <p style="text-align: center;">&nbsp;</p>
            <p style="text-align: center;">{nome_do_delegado}<br /> Delegado(a) de Pol&iacute;cia</p>
            <p style="text-align: center;">&nbsp;</p>
            <p>&nbsp;</p>
            <p style="text-align: center;"><strong>TERMO DE COMPROMISSO</strong></p>
            <p style="text-align: justify;">Aos {data_mes_e_ano}, nesta Cidade de {cidade_onde_o_procedimento_esta_sendo_realizado}, Estado de Pernambuco, no Cart&oacute;rio desta Delegacia de Pol&iacute;cia, onde presente se encontrava o(a) Bel(a). {nome_do_delegado}, respectivo(a) Delegado(a), este, por interm&eacute;dio da Portaria supra, considerando a falta de Escriv&atilde;o de seu cargo, me nomeou para atuar como Escriv&atilde;o(&atilde;) Ad Hoc neste Inqu&eacute;rito Policial, deferindo-me o compromisso legal de bem e fielmente desempenhar o encargo. Em fun&ccedil;&atilde;o da minha concord&acirc;ncia, mandou lavrar este Termo, que lido e achado conforme, assina-o comigo, Escriv&atilde;o(&atilde;) Ad Hoc, que o digitei.</p>
            <p>AUTORIDADE: _________________________________________________________________</p>
            <p>ESCRIV&Atilde;O(&Atilde;) AD HOC: ___________________________________________________________</p>
            <p>&nbsp;</p>
          `,
    ativo: true,
    tags: ["agentes_de_policia"],
  },
  {
    id: 231,
    nomePeca: "Termo Circunstanciado de Ocorrência - TCO - Flagrante",
    htmlContent: `
            <p style="text-align: center;"><strong>TERMO CIRCUNSTANCIADO DE OCORR&Ecirc;NCIA</strong></p>
            <p style="text-align: center;"><strong>TCO N&ordm; {numero_do_procedimento}</strong></p>
            <p>&nbsp;</p>
            <p>DATA:&nbsp;<strong>{data_mes_e_ano}</strong><br /> ORIGEM DA NOT&Iacute;CIA:&nbsp;<strong>BOE n&ordm; {numero_do_bo}</strong></p>
            <p>&nbsp;</p>
            <p><strong>OCORR&Ecirc;NCIA</strong>&nbsp;</p>
            <p>DATA DO FATO:&nbsp;<strong>{data_do_fato}</strong><br /> HORA DO FATO:&nbsp;<strong>{hora_do_fato}</strong><br /> LOCAL DO FATO:&nbsp;<strong>{endereco_onde_ocorreu_o_fato}</strong><br /> INCID&Ecirc;NCIA PENAL:<strong>&nbsp;</strong><strong>{incidencia_penal}</strong></p>
            <p>&nbsp;</p>
            <p><strong>CONDUTOR</strong></p>
            <p>&nbsp;{qualificacao_do_condutor}</p>
            <p><strong>V&Iacute;TIMA(S)</strong></p>
            <p>&nbsp;{qualificacao_da_vitima}</p>
            <p><strong>AUTUADO(S)</strong></p>
            <p>{qualificacao_completa_do_imputado}</p>
            <p><strong>TESTEMUNHA(S)</strong></p>
            <p>&nbsp;{qualificacao_da_primeira_testemunha}</p>
            <p><strong>&nbsp;</strong></p>
            <p>&nbsp;</p>
            <p><strong>HIST&Oacute;RICO</strong></p>
            <p><strong>Resumo do fato:</strong>&nbsp;{cole_aqui_a_descricao_do_bo}</p>
            <p>&nbsp;&nbsp;</p>
            <p><strong>APREENS&Otilde;ES</strong></p>
            <p>&nbsp;</p>
            <p><strong>DESPACHO</strong></p>
            <p style="text-align: justify;">Registrados os dados poss&iacute;veis, seja a 1&ordf; Via do Boletim de Ocorr&ecirc;ncia remetida ao F&oacute;rum da Comarca de {cidade_onde_o_procedimento_esta_sendo_realizado}, a 2&ordf; ao ___________________(Departamento), para os devidos fins, e a 3&ordf; arquive-se.</p>
            <p>&nbsp;</p>
            <p style="text-align: center;"><strong>{cidade_onde_o_procedimento_esta_sendo_realizado}, {data_mes_e_ano}</strong></p>
            <p style="text-align: center;">&nbsp;</p>
            <p style="text-align: center;"><strong>{nome_do_delegado}</strong><br /> Delegado(a) de Pol&iacute;cia</p>
            <p style="text-align: center;">&nbsp;</p>
          `,
    ativo: true,
    tags: ["condutores", "autuados", "vitimas", "testemunhas"],
  },
  {
    id: 240,
    nomePeca: "Termo de Compromisso de Comparecimento em Juízo",
    htmlContent: `
            <p style="text-align: center; font-size: 16px;"><strong>TERMO DE COMPROMISSO<br />DE COMPARECIMENTO EM JU&Iacute;ZO</strong></p>
            <p>&nbsp;</p>
            <p style="text-align: left; font-size: 16px;">Ref.:&nbsp;<strong>{tipo_de_procedimento}</strong> n&deg; <strong>{numero_do_procedimento}</strong></p>
            <p style="text-align: justify; font-size: 16px;">Aos {data_mes_e_ano}, nesta Cidade de {cidade_onde_o_procedimento_esta_sendo_realizado}, munic&iacute;pio do Estado de Pernambuco, no Cart&oacute;rio Delegacia de Pol&iacute;cia, onde presente se encontrava o(a) Bel(a). <strong>{nome_do_delegado}</strong>, respectivo(a) Delegado(a) de Pol&iacute;cia, e comigo <strong>{nome_do_escrivao}</strong>, Escriv&atilde;o(&atilde;) de seu cargo, ao final assinado(a), a&iacute;, presente o Sr.(a) <strong>{qualificacao_completa_do_imputado}</strong>, QUE <strong>SE COMPROMETEU</strong> CONSOANTE O DISPOSTO NO ART. 69 PAR&Aacute;GRAFO &Uacute;NICO DA LEI N&ordm; 9.099/95, a comparecer NO JUIZADO ESPECIAL CRIMINAL, no dia e hora agendados junto &agrave; sua Secretaria, ou em cumprimento &agrave; sua notifica&ccedil;&atilde;o posterior. Nada mais havendo, determinou a Autoridade fosse encerrado este Termo, que o assina juntamente com o(a) autor(a) do fato e comigo Escriv&atilde;o(&atilde;) que o digitei.</p>
            <p>&nbsp;</p>
            <p style="text-align: left; font-size: 16px;">AUTORIDADE POLICIAL: _______________________________________________</p>
            <p style="text-align: left; font-size: 16px;">COMPROMISSADO(A): ________________________________________________</p>
            <p style="text-align: left; font-size: 16px;">ESCRIV&Atilde;O(&Atilde;): ___________________________________________________________</p>
            <p>&nbsp;</p>
    `,
    ativo: true,
    tags: ["autuados"],
  },
  {
    id: 249,
    nomePeca:
      "Termo de Liberação, Compromisso e Responsabilidade - Adolescente Infrator",
    htmlContent: `
            <p style="text-align: center; font-size: 14pt;"><strong>TERMO DE LIBERA&Ccedil;&Atilde;O, COMPROMISSO E<br />RESPONSABILIDADE DE ADOLESCENTE INFRATOR</strong></p>
            <p>&nbsp;</p>
            <p style="text-align: justify; text-indent: 0.78in;"><span style="font-family: Arial, sans-serif; text-indent: 74.88px;">Aos {data_mes_e_ano}, nesta Cidade de {cidade_onde_o_procedimento_esta_sendo_realizado}, Estado de Pernambuco, no Cart&amp;oacute;rio desta Delegacia, onde presente se encontrava o(a) Bel(a). {nome_do_delegado}, respectivo(a) Delegado(a), comigo, {nome_do_escrivao}</span>L, Escriv&atilde;o(&atilde;) de seu cargo, ao final assinado(a), a&iacute; compareceu o (a) Senhor (a) <strong>{qualificacao_do_representante_legal_do_menor_infrator}</strong> representante legal do adolescente&nbsp;<strong style="text-indent: 0px;">{qualificacao_completa_do_imputado},&nbsp;</strong>apreendido por ter praticado conduta an&aacute;loga ao crime previsto no&nbsp;<strong>{incidencia_penal}</strong>, conforme Boletim de Ocorr&ecirc;ncia n&ordm; <strong>BOE n&ordm; {numero_do_bo}</strong>, a quem referido adolescente foi entregue, tendo na ocasi&atilde;o assumido o compromisso de apresent&aacute;-lo ao representante do Minist&eacute;rio P&uacute;blico, no prazo de 24 horas ou no 1&ordm; dia &uacute;til, conforme disp&otilde;e o Art. 174, da Lei n&ordm; 8.069/90, de 13 de Julho de 1990 (Estatuto da Crian&ccedil;a e do Adolescente), ficando ainda ciente de que o adolescente n&atilde;o poder&aacute;: freq&uuml;entar casa de jogo ou mal-afamada, conviver com pessoa viciosa ou de m&aacute; vida, freq&uuml;entar espet&aacute;culo capaz de pervert&ecirc;-lo ou ofender-lhe o pudor, ou participar de representa&ccedil;&atilde;o de igual natureza, residir ou trabalhar em casa de prostitui&ccedil;&atilde;o, mendigar ou servir a mendigo para excitar a comisera&ccedil;&atilde;o p&uacute;blica, sob pena de responsabilidade do adulto que assim o permitir, de conformidade com o Art. 247, do C&oacute;digo Penal Brasileiro. Nada mais havendo a ser consignado, determinou a Autoridade que fosse lavrado este Termo que, depois de lido e achado conforme, o assina com o Representante Legal do adolescente mencionado e comigo, Escriv&atilde;o(&atilde;), que o digitei.</p>
            <p>&nbsp;</p>
            <p>AUTORIDADE: ________________________________________________________________________</p>
            <p>REPRESENTANTE LEGAL: _____________________________________________________________</p>
            <p>ESCRIV&Atilde;O(&Atilde;): ___________________________________________________________________________</p>
            `,
    ativo: true,
    tags: ["adolescentes_infratores"],
  },
  {
    id: 250,
    nomePeca: "Termo de Liberação, Compromisso e Responsabilidade - BOC",
    htmlContent: `
            <p style="text-align: center;"><strong>TERMO DE LIBERA&Ccedil;&Atilde;O, COMPROMISSO E<br /> RESPONSABILIDADE DE ADOLESCENTE INFRATOR</strong></p>
            <p>Ref.:<strong>&nbsp;{numero_do_procedimento}</strong></p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">Aos {data_mes_e_ano}, nesta Cidade de {cidade_onde_o_procedimento_esta_sendo_realizado}, Estado de Pernambuco, no Cart&oacute;rio desta Delegacia de Pol&iacute;cia, onde presente se encontrava o(a) Bel(a). {nome_do_delegado}, respectivo(a) Delegado(a), comigo, {nome_do_escrivao}, Escriv&atilde;o(&atilde;) de seu cargo, ao final assinado(a), a&iacute; compareceu o(a) adolescente <strong>{qualificacao_completa_do_imputado}</strong>, apreendido por ter praticado conduta an&aacute;loga ao crime previsto no <strong>{incidencia_penal}</strong>&nbsp;conforme Boletim de Ocorr&ecirc;ncia n&ordm;&nbsp;<strong>BOE n&ordm; {numero_do_bo}</strong>,&nbsp;<strong>ENTREGUE</strong>&nbsp;ao seu&nbsp;<strong>RESPONS&Aacute;VEL LEGAL</strong>, abaixo assinado, tendo na ocasi&atilde;o assumido o compromisso de apresent&aacute;-lo ao representante do Minist&eacute;rio P&uacute;blico, no prazo de 24 horas ou no 1&ordm; dia &uacute;til, conforme disp&otilde;e o Art. 174, da Lei n&ordm; 8.069/90, de 13 de Julho de 1990 (Estatuto da Crian&ccedil;a e do Adolescente), ficando ainda ciente de que o adolescente n&atilde;o poder&aacute;: frequentar casa de jogo ou mal-afamada, conviver com pessoa viciosa ou de m&aacute; vida, frequentar espet&aacute;culo capaz de pervert&ecirc;-lo ou ofender-lhe o pudor, ou participar de representa&ccedil;&atilde;o de igual natureza, residir ou trabalhar em casa de prostitui&ccedil;&atilde;o, mendigar ou servir a mendigo para excitar a comisera&ccedil;&atilde;o p&uacute;blica, sob pena de responsabilidade do adulto que assim o permitir, de conformidade com o Art. 247, do C&oacute;digo Penal Brasileiro. Nada mais havendo a ser consignado, determinou a Autoridade que fosse lavrado este Termo que, depois de lido e achado conforme, o assina com o Representante Legal do adolescente mencionado e comigo, Escriv&atilde;o(&atilde;), que o digitei.</p>
            <p>&nbsp;</p>
            <p>AUTORIDADE: _________________________________________________________________________</p>
            <p>ESCRIV&Atilde;O(&Atilde;): ____________________________________________________________________________</p>
            <p>&nbsp;</p>
            <p><strong>Representante Legal</strong></p>
            <p>O(a) Senhor(a): _________________________________________________________________________</p>
            <p>CPF: _______________________________________ RG: ________________________________________</p>
            <p>Endere&ccedil;o: ______________________________________________________________</p>
            <p>Telefone: _______________________________________________________________</p>
            <p>&nbsp;</p>
    `,
    ativo: true,
    tags: ["adolescentes_infratores"],
  },
  {
    id: 251,
    nomePeca: "Termo de Qualificação Indireta",
    htmlContent: `
            <p style="text-align: center; font-size: 14pt;"><strong>TERMO DE QUALIFICA&Ccedil;&Atilde;O INDIRETA</strong></p>
            <p>&nbsp;</p>
            <p style="text-align: justify;"><span style="font-family: Arial, sans-serif; text-indent: 74.88px;">Aos {data_mes_e_ano}, nesta Cidade de {cidade_onde_o_procedimento_esta_sendo_realizado}, Estado de Pernambuco, no Cart&amp;oacute;rio desta Delegacia, onde presente se encontrava o(a) Bel(a). {nome_do_delegado}, respectivo(a) Delegado(a), comigo, {nome_do_escrivao}</span>, Escriv&atilde;o(&atilde;) de seu cargo, ao final assinado(a), a&iacute; foi determinado pela Autoridade que se consignasse, neste Auto, a Qualifica&ccedil;&atilde;o Indireta do Imputado:&nbsp;<strong>{nome_do_imputado}</strong>, que, conforme revela o documento, constante nos autos &agrave;s fls. _________,o qualifica da seguinte forma:&nbsp;&nbsp;<strong>{qualificacao_completa_do_imputado}</strong>.</p>
            <p style="text-align: justify;">&nbsp;</p>
            <p style="text-align: justify;">Nada mais havendo a acrescentar, mandou a Autoridade encerrar o presente Termo, que, lido e achado conforme, o assina comigo, Escriv&atilde;o(&atilde;), que o digitei.</p>
            <p>&nbsp;</p>
            <p>AUTORIDADE: ___________________________________________________________________</p>
            <p>ESCRIV&Atilde;O(&Atilde;): ______________________________________________________________________</p>
            `,
    ativo: true,
    tags: ["imputados"],
  },
  {
    id: 252,
    nomePeca: "Termo de Qualificação e Interrogatório",
    htmlContent: `
            <p style="text-align: center; font-size: 14pt;"><strong>TERMO DE QUALIFICA&Ccedil;&Atilde;O E INTERROGAT&Oacute;RIO</strong></p>
            <p>&nbsp;</p>
            <p style="text-align: justify;"><span style="font-family: Arial, sans-serif; text-indent: 74.88px;">Aos {data_mes_e_ano}, nesta Cidade de {cidade_onde_o_procedimento_esta_sendo_realizado}, Estado de Pernambuco, no Cart&amp;oacute;rio desta Delegacia, onde presente se encontrava o(a) Bel(a). {nome_do_delegado}, respectivo(a) Delegado(a), comigo, {nome_do_escrivao}</span>, Escriv&atilde;o(&atilde;) de seu cargo, ao final assinado(a), a&iacute; compareceu o(a) imputado(a) <strong>{qualificacao_completa_do_imputado}</strong>. Ap&oacute;s a qualifica&ccedil;&atilde;o supra, passou a ser cientificado pela Autoridade das imputa&ccedil;&otilde;es que lhe s&atilde;o feitas, bem como dos direitos que lhe s&atilde;o assegurados pelo art. 5&ordm;, Incs. LXI, LXII, LXIII e LXIV da Constitui&ccedil;&atilde;o Federal, em especial o de permanecer em sil&ecirc;ncio, sem que disso advenha preju&iacute;zo na sua defesa. Interrogado(a) nos termos do Art. 187 &sect; 1&ordm; e 2&ordm; do C&oacute;digo de Processo Penal, respondeu: <strong>QUE,</strong> ________________________.</p>
            <p>E, nada mais havendo a constar, mandou a Autoridade encerrar este Termo, que o assina com o(a) Interrogado(a), e comigo, Escriv&atilde;o(&atilde;), que o digitei.</p>
            <p>&nbsp;</p>
            <p>AUTORIDADE: ________________________________________________</p>
            <p>INTERROGADO(A): ___________________________________________</p>
            <p>ESCRIV&Atilde;O(&Atilde;): ________________________________________________</p>
            `,
    ativo: true,
    tags: ["interrogados"],
  },
  {
    id: 256,
    nomePeca: "Termo de Representação - BOC (Menor Infrator)",
    htmlContent: `
            <p style="text-align: center;"><strong>TERMO DE REPRESENTA&Ccedil;&Atilde;O</strong></p>
            <p>Ref.:&nbsp;<strong>{tipo_de_procedimento} N&ordm; {numero_do_procedimento}</strong></p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">Aos {data_mes_e_ano},&nbsp;nesta Cidade de&nbsp;{cidade_onde_o_procedimento_esta_sendo_realizado}, Estado de Pernambuco, no Cart&oacute;rio desta Delegacia de Pol&iacute;cia, onde presente se encontrava o(a) Bel(a). {nome_do_delegado}, respectivo(a) Delegado(a), comigo, {nome_do_escrivao}, Escriv&atilde;o(&atilde;) de seu cargo, ao final assinado(a), a&iacute; compareceu: {qualificacao_da_vitima}, j&aacute; devidamente qualificado(a), o(a) qual representou, verbalmente, contra a pessoa de <strong>{qualificacao_completa_do_imputado}</strong>, j&aacute; devidamente qualificado(s), pelo fato incurso nas penas do&nbsp;<strong>{incidencia_penal}</strong>, em raz&atilde;o da qual pede as provid&ecirc;ncias legais para que preventivamente, sejam evitadas maiores e prejudiciais consequ&ecirc;ncias. Nada mais disse nem lhe foi perguntado. Lido e achado conforme, mandou a Autoridade encerrar o presente Termo de Representa&ccedil;&atilde;o, que o assina com o(a) Representante e comigo, Escriv&atilde;o(&atilde;), que o digitei.</p>
            <p>&nbsp;</p>
            <p>AUTORIDADE: ________________________________________________________________</p>
            <p>REPRESENTANTE: ____________________________________________________________</p>
            <p>ESCRIV&Atilde;O(&Atilde;): ___________________________________________________________________</p>
            <p>&nbsp;</p>
           `,
    ativo: true,
    tags: ["vitimas", "menores_infratores"],
  },
  {
    id: 257,
    nomePeca: "Termo de Representação - Inquérito Policial",
    htmlContent: `
            <p style="text-align: center;"><strong>TERMO DE REPRESENTA&Ccedil;&Atilde;O</strong></p>
            <p>Ref.:&nbsp;<strong>{tipo_de_procedimento} N&ordm; {numero_do_procedimento}</strong></p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">Aos {data_mes_e_ano},&nbsp;nesta Cidade de&nbsp;{cidade_onde_o_procedimento_esta_sendo_realizado}, Estado de Pernambuco, no Cart&oacute;rio desta Delegacia de Pol&iacute;cia, onde presente se encontrava o(a) Bel(a). {nome_do_delegado}, respectivo(a) Delegado(a), comigo, {nome_do_escrivao}, Escriv&atilde;o(&atilde;) de seu cargo, ao final assinado(a), a&iacute; compareceu: {qualificacao_da_vitima}, j&aacute; devidamente qualificado(a), o(a) qual representou, verbalmente, contra a pessoa de <strong>{qualificacao_completa_do_imputado}</strong>, j&aacute; devidamente qualificado(s), pelo fato incurso nas penas do&nbsp;<strong>{incidencia_penal}</strong>, em raz&atilde;o da qual pede as provid&ecirc;ncias legais para que preventivamente, sejam evitadas maiores e prejudiciais consequ&ecirc;ncias. Nada mais disse nem lhe foi perguntado. Lido e achado conforme, mandou a Autoridade encerrar o presente Termo de Representa&ccedil;&atilde;o, que o assina com o(a) Representante e comigo, Escriv&atilde;o(&atilde;), que o digitei.</p>
            <p>&nbsp;</p>
            <p>AUTORIDADE: ________________________________________________________________</p>
            <p>REPRESENTANTE: ____________________________________________________________</p>
            <p>ESCRIV&Atilde;O(&Atilde;): ___________________________________________________________________</p>
            <p>&nbsp;</p>
           `,
    ativo: true,
    tags: ["autuados", "vitimas"],
  },
  {
    id: 258,
    nomePeca: "Termo de Representação - TCO (Adulto)",
    htmlContent: `
            <p style="text-align: center;"><strong>TERMO DE REPRESENTA&Ccedil;&Atilde;O</strong></p>
            <p>Ref.:&nbsp;<strong>{tipo_de_procedimento} N&ordm; {numero_do_procedimento}</strong></p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">Aos {data_mes_e_ano},&nbsp;nesta Cidade de&nbsp;{cidade_onde_o_procedimento_esta_sendo_realizado}, Estado de Pernambuco, no Cart&oacute;rio desta Delegacia de Pol&iacute;cia, onde presente se encontrava o(a) Bel(a). {nome_do_delegado}, respectivo(a) Delegado(a), comigo, {nome_do_escrivao}, Escriv&atilde;o(&atilde;) de seu cargo, ao final assinado(a), a&iacute; compareceu: {qualificacao_da_vitima}, j&aacute; devidamente qualificado(a), o(a) qual representou, verbalmente, contra a pessoa de <strong>{qualificacao_completa_do_imputado}</strong>, j&aacute; devidamente qualificado(s), pelo fato incurso nas penas do&nbsp;<strong>{incidencia_penal}</strong>, em raz&atilde;o da qual pede as provid&ecirc;ncias legais para que preventivamente, sejam evitadas maiores e prejudiciais consequ&ecirc;ncias. Nada mais disse nem lhe foi perguntado. Lido e achado conforme, mandou a Autoridade encerrar o presente Termo de Representa&ccedil;&atilde;o, que o assina com o(a) Representante e comigo, Escriv&atilde;o(&atilde;), que o digitei.</p>
            <p>&nbsp;</p>
            <p>AUTORIDADE: ________________________________________________________________</p>
            <p>REPRESENTANTE: ____________________________________________________________</p>
            <p>ESCRIV&Atilde;O(&Atilde;): ___________________________________________________________________</p>
            <p>&nbsp;</p>
           `,
    ativo: true,
    tags: ["vitimas", "autuados"],
  },
  {
    id: 259,
    nomePeca: "Termo de Representação - TCO (Menor Vítima)",
    htmlContent: `
            <p style="font-size: 14pt; text-align: center;"><strong>TERMO DE REPRESENTA&Ccedil;&Atilde;O</strong></p>
            <p><strong>Ref.: {tipo_de_procedimento}N&ordm; {numero_do_procedimento}</strong></p>
            <p>&nbsp;</p>
            <p style="text-align: justify; text-indent: 0.78in;">Aos {data_mes_e_ano}, nesta Cidade de {cidade_onde_o_procedimento_esta_sendo_realizado}, Estado de Pernambuco, no Cart&amp;oacute;rio desta Delegacia, onde presente se encontrava o(a) Bel(a). {nome_do_delegado}, respectivo(a) Delegado(a), comigo, {nome_do_escrivao}, Escriv&atilde;o(&atilde;) de seu cargo, ao final assinado(&atilde;), a&iacute; compareceu: {qualificacao_da_vitima}<strong>, j&aacute; devidamente qualificado(a), o(a) qual representou, verbalmente, contra a(s) pessoa(s) de </strong>{qualificacao_completa_do_imputado}<strong>, j&aacute; devidamente qualificado(s) pelo fato incurso nas penas do </strong><strong style="font-weight: bold;">{incidencia_penal}</strong><strong>, em raz&atilde;o da qual pede as provid&ecirc;ncias legais para que preventivamente, sejam evitadas maiores e prejudiciais consequ&ecirc;ncias. Nada mais disse nem lhe foi perguntado. Lido e achado conforme, mandou a Autoridade encerrar o presente Termo de Representa&ccedil;&atilde;o, que o assina com o(a) Representante e comigo, Escriv&atilde;o, que o digitei.</strong></p>
            <p>&nbsp;</p>
            <p>AUTORIDADE: ______________________________________________________</p>
            <p>MENOR: ____________________________________________________________</p>
            <p>REPRESENTANTE LEGAL: ___________________________________________</p>
            <p>ESCRIV&Atilde;O: _________________________________________________________</p>
            `,
    ativo: true,
    tags: ["vitimas", "autuados"],
  },
  {
    id: 261,
    nomePeca:
      "Termo de Requerimento de Medidas Protetivas de Urgência - Lei 11.340/2006",
    htmlContent: `
            <p style="font-size: 11pt; text-align: center;"><strong>TERMO DE REQUERIMENTO DE MEDIDAS PROTETIVAS DE URG&Ecirc;NCIA</strong><br />(Lei 11.340/2006)</p>
            <p>&nbsp;</p>
            <p style="text-align: justify; text-indent: 0.78in; border-bottom: none;">Aos {data_mes_e_ano}, nesta Cidade de {cidade_onde_o_procedimento_esta_sendo_realizado}, Estado de Pernambuco, no Cart&oacute;rio desta Delegacia, onde presente se encontrava o(a) Bel(a). {nome_do_delegado}, respectivo(a) Delegado(a),&nbsp;Escriv&atilde;o(&atilde;) de seu cargo, ao final assinado(a), a&iacute; compareceu: {qualificacao_da_vitima}<strong>, <strong>REQUERENDO A CONCESS&Atilde;O DE MEDIDAS PROTETIVAS DE URG&Ecirc;NCIA</strong> na forma do disposto no <strong>Art. 12 &sect; 1&ordm;, da Lei 11.340, de 7 de agosto de 2006</strong>. Nada mais disse nem lhe foi perguntado. Lido e achado conforme mandou a Autoridade encerrar o presente Termo que assina com a requerente e comigo Escriv&atilde;o(&atilde;) que digitei.</strong></p>
            <p><strong>&nbsp;</strong></p>
            <p><strong>AUTORIDADE: ________________________________________</strong></p>
            <p><strong>REQUERENTE: ________________________________________</strong></p>
            <p><strong>ESCRIV&Atilde;O(&Atilde;): ___________________________________________</strong></p>
            <p>&nbsp;</p>
            `,
    ativo: true,
    tags: ["vitimas"],
  },
  {
    id: 262,
    nomePeca: "Termo de Restituição (Entrega)",
    htmlContent: `
            <p style="text-align: center;"><strong>TERMO DE RESTITUI&Ccedil;&Atilde;O</strong><br /> (Art. 120 do CPP)</p>
            <p>&nbsp;</p>
            <p style="text-align: justify;">&Agrave;s {hora_atual} horas, do dia {data_mes_e_ano}, nesta Cidade de {cidade_onde_o_procedimento_esta_sendo_realizado}, Estado de Pernambuco, no Cart&oacute;rio desta Delegacia, onde presente se encontrava o(a) Bel(a). {nome_do_delegado}, respectivo(a) Delegado(a), comigo {nome_do_escrivao},&nbsp;Escriv&atilde;o(&atilde;) de seu cargo, ao final assinado(a), a&iacute; compareceu {qualificacao_da_pessoa_que_esta_recebendo_o_bem}, a quem a Autoridade determinou fosse entregue o(s) seguinte(s) objeto(s)&nbsp;constante(s) no Auto de Apresenta&ccedil;&atilde;o e Apreens&atilde;o:</p>
            <p style="text-align: justify;"><strong>{descricao_do_objeto_restituido}</strong></p>
            <p style="text-align: justify;">Nada mais havendo a ser restitu&iacute;do, determinou a Autoridade que fosse lavrado o presente Termo, assinando-o com o Recebedor, as Testemunhas e comigo, Escriv&atilde;o(&atilde;), que o digitei.</p>
            <p>&nbsp;</p>
            <p>AUTORIDADE: ______________________________________________________________________</p>
            <p>RECEBEDOR: _______________________________________________________________________</p>
            <p>TESTEMUNHA: _____________________________________________________________________</p>
            <p>TESTEMUNHA: _____________________________________________________________________</p>
            <p>ESCRIV&Atilde;O(&Atilde;): _________________________________________________________________________</p>
            <p>&nbsp;</p>
    `,
    ativo: true,
    tags: ["recebedores", "apreensoes"],
  },
  {
    id: 270,
    nomePeca: "Capa de Termo Circunstanciado de Ocorrência TCO",
    htmlContent: `
            <p style="text-align: center;"><strong>Termo Circunstanciado de Ocorr&ecirc;ncia</strong></p>
            <p style="text-align: center;"><strong>TCO</strong></p>
            <p style="text-align: center;"><strong>{numero_do_procedimento}</strong></p>
            <p>&nbsp;</p>
            <p><strong>Envolvidos no Procedimento</strong></p>
            <p><strong>V&iacute;tima(s): {nome_da_vitima} -------------- Imputado(s): {nome_do_imputado}</strong></p>
            <p><strong>&nbsp;</strong></p>
            <p><strong>&nbsp;</strong></p>
            <p><strong>&nbsp;</strong></p>
            <p><strong>&nbsp;</strong></p>
            <p><strong>&nbsp;</strong></p>
            <p>&nbsp;</p>
            <p><strong>Informa&ccedil;&otilde;es Complementares</strong></p>
            <p>Delegado(a) de Instaura&ccedil;&atilde;o: {nome_do_delegado}</p>
            <p>Escriv&atilde;o(&atilde;) de Instaura&ccedil;&atilde;o: {nome_do_escrivao}</p>
            <p>Boletim de Ocorr&ecirc;ncia: BOE n&ordm; {numero_do_bo}</p>
            <p>Data/Hora do Fato: {data_e_hora_do_fato}</p>
            <p>Tipifica&ccedil;&atilde;o: {incidencia_penal}</p>
            <p>Principal Motivo: N&Atilde;O INFORMADO</p>
            <p>Data de Instaura&ccedil;&atilde;o: {data_de_instauracao}</p>
            <table>
            <tbody>
            <tr>
            <td width="380">&nbsp;</td>
            <td width="380">&nbsp;</td>
            </tr>
            </tbody>
            </table>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
          `,
    ativo: true,
    tags: ["vitimas", "autuados"],
  },
  {
    id: 271,
    nomePeca: "Capa de Boletim de Ocorrência Circunstanciado BOC",
    htmlContent: `
            <p style="text-align: center;"><strong>Boletim de Ocorr&ecirc;ncia Circunstanciado</strong></p>
            <p style="text-align: center;"><strong>BOC</strong></p>
            <p style="text-align: center;"><strong>{numero_do_procedimento}</strong></p>
            <p>&nbsp;</p>
            <p><strong>Envolvidos no Procedimento</strong></p>
            <p><strong>V&iacute;tima(s): {nome_da_vitima} -------------- Imputado(s): {nome_do_imputado}</strong></p>
            <p><strong>&nbsp;</strong></p>
            <p><strong>&nbsp;</strong></p>
            <p><strong>&nbsp;</strong></p>
            <p><strong>&nbsp;</strong></p>
            <p><strong>&nbsp;</strong></p>
            <p>&nbsp;</p>
            <p><strong>Informa&ccedil;&otilde;es Complementares</strong></p>
            <p>Delegado(a) de Instaura&ccedil;&atilde;o: <strong>{nome_do_delegado}</strong></p>
            <p>Escriv&atilde;o(&atilde;) de Instaura&ccedil;&atilde;o: <strong>{nome_do_escrivao}</strong></p>
            <p>Boletim de Ocorr&ecirc;ncia: BOE n&ordm; <strong>{numero_do_bo}</strong></p>
            <p>Data/Hora do Fato: <strong>{data_e_hora_do_fato}</strong></p>
            <p>Tipifica&ccedil;&atilde;o: <strong>{incidencia_penal}</strong></p>
            <p>Principal Motivo: N&Atilde;O INFORMADO</p>
            <p>Data de Instaura&ccedil;&atilde;o: <strong>{data_de_instauracao}</strong></p>
        `,
    ativo: true,
    tags: ["vitimas", "autuados"],
  },
  {
    id: 272,
    nomePeca: "Capa de Procedimento Especial de Menor PEM",
    htmlContent: `
            <p style="text-align: center;"><strong>Procedimento Especial de Menor</strong></p>
            <p style="text-align: center;"><strong>BOC</strong></p>
            <p style="text-align: center;"><strong>{numero_do_procedimento}</strong></p>
            <p>&nbsp;</p>
            <p><strong>Envolvidos no Procedimento</strong></p>
            <p><strong>V&iacute;tima(s): {nome_da_vitima} -------------- Infrator(es):: {nome_do_imputado}</strong></p>
            <p><strong>&nbsp;</strong></p>
            <p><strong>&nbsp;</strong></p>
            <p><strong>&nbsp;</strong></p>
            <p><strong>&nbsp;</strong></p>
            <p><strong>&nbsp;</strong></p>
            <p>&nbsp;</p>
            <p><strong>Informa&ccedil;&otilde;es Complementares</strong></p>
            <p>Delegado(a) de Instaura&ccedil;&atilde;o: <strong>{nome_do_delegado}</strong></p>
            <p>Escriv&atilde;o(&atilde;) de Instaura&ccedil;&atilde;o: <strong>{nome_do_escrivao}</strong></p>
            <p>Boletim de Ocorr&ecirc;ncia: BOE n&ordm; <strong>{numero_do_bo}</strong></p>
            <p>Data/Hora do Fato: <strong>{data_e_hora_do_fato}</strong></p>
            <p>Tipifica&ccedil;&atilde;o: <strong>{incidencia_penal}</strong></p>
            <p>Principal Motivo: N&Atilde;O INFORMADO</p>
            <p>Data de Instaura&ccedil;&atilde;o: <strong>{data_de_instauracao}</strong></p>
        `,
    ativo: true,
    tags: ["vitimas", "autuados"],
  },
  {
    id: 273,
    nomePeca: "Capa do Inquérito Policial APFD",
    htmlContent: `
            <p style="text-align: center;"><strong>Inqu&eacute;rito Policial</strong></p>
            <p style="text-align: center;"><strong>APFD</strong></p>
            <p style="text-align: center;"><strong>{numero_do_procedimento}</strong></p>
            <p>&nbsp;</p>
            <p><strong>Envolvidos no Procedimento</strong></p>
            <p><strong>V&iacute;tima(s): {nome_da_vitima}-------------- Imputado(s): {nome_do_imputado}</strong></p>
            <p><strong>&nbsp;</strong></p>
            <p><strong>&nbsp;</strong></p>
            <p><strong>&nbsp;</strong></p>
            <p><strong>&nbsp;</strong></p>
            <p><strong>&nbsp;</strong></p>
            <p>&nbsp;</p>
            <p><strong>Informa&ccedil;&otilde;es Complementares</strong></p>
            <p>Delegado(a) de Instaura&ccedil;&atilde;o: <strong>{nome_do_delegado}</strong></p>
            <p>Escriv&atilde;o(&atilde;) de Instaura&ccedil;&atilde;o: <strong>{nome_do_escrivao}</strong></p>
            <p>Boletim de Ocorr&ecirc;ncia: BOE n&ordm; <strong>{numero_do_bo}</strong></p>
            <p>Data/Hora do Fato: <strong>{data_e_hora_do_fato}</strong></p>
            <p>Tipifica&ccedil;&atilde;o: <strong>{incidencia_penal}</strong></p>
            <p>Principal Motivo: N&Atilde;O INFORMADO</p>
            <p>Data de Instaura&ccedil;&atilde;o: <strong>{data_de_instauracao}</strong></p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
    `,
    ativo: true,
    tags: ["vitimas", "autuados"],
  },
  {
    id: 274,
    nomePeca: "Capa de Verificação Preliminar de Informação VPI",
    htmlContent: `
            <p style="text-align: center; font-size: 16px;"><strong>Verifica&ccedil;&atilde;o Preliminar de Informa&ccedil;&atilde;o</strong></p>
            <p style="text-align: center; font-size: 16px;"><strong>VPI</strong></p>
            <p style="text-align: center; font-size: 16px;"><strong>{numero_do_procedimento}</strong></p>
            <p>&nbsp;</p>
            <p style="text-align: left; font-size: 16px;"><strong>Envolvidos no Procedimento</strong></p>
            <p style="text-align: left; font-size: 16px;">V&iacute;tima(s): <strong>{nome_da_vitima}</strong> ------------Imputado(s):<strong> {nome_do_imputado}</strong></p>
            <p><br /><br /><br /><br /><br /><br /></p>
            <p style="text-align: left; font-size: 16px;"><strong>Informa&ccedil;&otilde;es Complementares</strong></p>
            <p style="text-align: left; font-size: 16px;">Delegado(a) de Instaura&ccedil;&atilde;o: <strong>{nome_do_delegado}</strong></p>
            <p style="text-align: left; font-size: 16px;">Escriv&atilde;o(&atilde;) de Instaura&ccedil;&atilde;o: <strong>{nome_do_escrivao}</strong></p>
            <p style="text-align: left; font-size: 16px;">Boletim de Ocorr&ecirc;ncia: BOE n&ordm; <strong>{numero_do_bo}</strong></p>
            <p style="text-align: left; font-size: 16px;">Data/Hora do Fato: <strong>{data_e_hora_do_fato}</strong></p>
            <p style="text-align: left; font-size: 16px;">Tipifica&ccedil;&atilde;o: <strong>{incidencia_penal}</strong></p>
            <p style="text-align: left; font-size: 16px;">Principal Motivo: N&Atilde;O INFORMADO</p>
            <p style="text-align: left; font-size: 16px;">Data de Instaura&ccedil;&atilde;o: <strong>{data_de_instauracao}</strong></p>
            <p><br /><br /><br /><br /><br /></p>
    `,
    ativo: true,
    tags: ["vitimas", "autuados"],
  },
  {
    id: 277,
    nomePeca: "Boletim de Ocorrência Circunstanciado - BOC",
    htmlContent: `
            <p style="text-align: center;"><strong>BOLETIM DE OCORR&Ecirc;NCIA CIRCUNSTANCIADO</strong></p>
            <p style="text-align: center;"><strong>(Art. 173 Par&aacute;grafo &uacute;nico da Lei n&ordm; 8.069 de 13 de julho de 1990)</strong></p>
            <p style="text-align: center;"><strong>BOC N&ordm; {numero_do_procedimento}</strong></p>
            <p>&nbsp;</p>
            <p>DATA:&nbsp;<strong>{data_mes_e_ano}</strong><br /> ORIGEM DA NOT&Iacute;CIA:&nbsp;<strong>BOE n&ordm; {numero_do_bo}</strong></p>
            <p>&nbsp;</p>
            <p><strong>OCORR&Ecirc;NCIA</strong></p>
            <p>DATA DO FATO:&nbsp;<strong>{data_do_fato}</strong><br /> HORA DO FATO:&nbsp;<strong>{hora_do_fato}</strong><br /> LOCAL DO FATO:&nbsp;<strong>{endereco_onde_ocorreu_o_fato}</strong><br /> INCID&Ecirc;NCIA PENAL:&nbsp;<strong></strong><strong>{incidencia_penal}</strong></p>
            <p>&nbsp;</p>
            <p><strong>ENVOLVIDOS</strong></p>
            <p><strong>CONDUTOR</strong></p>
            <p>&nbsp;{qualificacao_do_condutor}</p>
            <p><strong>V&Iacute;TIMA(S)</strong></p>
            <p>&nbsp;{qualificacao_da_vitima}</p>
            <p><strong>INFRATOR(A)</strong></p>
            <p>{qualificacao_completa_do_imputado}</p>
            <p><strong>TESTEMUNHA(S)</strong></p>
            <p>&nbsp;{qualificacao_da_primeira_testemunha}</p>
            <p><strong>&nbsp;</strong></p>
            <p>&nbsp;</p>
            <p><strong>HIST&Oacute;RICO</strong></p>
            <p><strong>Resumo do fato:</strong>&nbsp;{cole_aqui_a_descricao_do_bo}</p>
            <p>&nbsp;&nbsp;</p>
            <p>&nbsp;</p>
            <p style="text-align: center;"><strong>{cidade_onde_o_procedimento_esta_sendo_realizado}, {data_mes_e_ano}</strong></p>
            <p style="text-align: center;">&nbsp;</p>
            <p style="text-align: center;"><strong>{nome_do_delegado}</strong><br /> Delegado(a) de Pol&iacute;cia</p>
            `,
    ativo: true,
    tags: ["condutores", "autuados", "vitimas", "testemunhas"],
  },
];
