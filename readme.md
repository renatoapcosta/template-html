
## O que é padronização de nomenclatura em design system?

É uma convenção para nomear classes CSS com base no papel de cada elemento na interface: layout, componente, utilitário, estado.
Assim, o CSS se torna:

* Modular
* Previsível
* Escalável
* Fácil de manter por equipes

## 🧱 Estrutura básica recomendada

| Prefixo | 	Descrição                    | 	Exemplo                 |
|---------|---------------------------------|--------------------------|
| l-	   | Layout: estrutura de página	 | l-sidebar-left           |
| c-	   | Componente: bloco reutilizável  | 	c-card, c-button        |
| u-	   | Utilitário: ajustes pontuais    | u-text-center, u-mt-4    |
| js-	   | Hook de JavaScript	             | js-toggle-panel          |
| is-	   | Estado (ativo, visível, aberto) | is-active, is-hidden     |

🔧 Isso é inspirado em ITCSS, BEM e práticas modernas de design system (ex: Salesforce Lightning, GOV.UK Design System, Shopify Polaris).

## Estrutura recomendada de arquivos

```
/css/
  ├── base.css         ← Reset, body, html
  ├── layout.css       ← header, footer, containers
  ├── components.css   ← sidebar, menu, cards
  ├── utilities.css    ← espaçamentos, texto, cores
  └── themes.css       ← dark/light ou outras variações

```

