+++
category = ["Copilot", "AI", "Chatbot", "Azure"]
date = 2024-07-23T00:00:00Z
image = "/uploads/Codie.png"
title = "Codie – der selbstlernende Chatbot von GS1 Switzerland"

+++

Der neue Chatbot Codie von GS1 Switzerland beantwortet auf der Webseite von GS1 Switzerland eigenständig Kundenfragen zum Thema Barcodes und berät zur Mitgliedschaft bei GS1 Switzerland. Diese Case Study veranschaulicht, worauf bei der Einführung dieses generativen Chatbots geachtet wird und wann der Fantasie von Codie Grenzen zu setzen sind.
GS1, die globale Organisation mit 150 Länderniederlassungen, vergibt die sogenannten GTINs, die Global Trade Item Numbers. Mittels dieser 13-stelligen Nummer kann jeder Artikel, jedes Produkt und jede Produktvariante weltweit überschneidungsfrei identifiziert werden. Über die GTIN werden einem Produkt global eindeutige Informationen oder Stammdaten zugewiesen und sie wird von Händlern wie Amazon, Migros oder Coop vorausgesetzt. Barcodes werden täglich weltweit über 10 Mrd. mal gescannt. GS1 Switzerland hat im Rahmen der Erarbeitung des Neukundenprozesses festgestellt, dass viele der Kundenfragen immer wieder dieselben Themen betrafen, insbesondere Barcodes und Mitgliedschaften. Für Petra Merino, Head of Marketing & Communications von GS1 Switzerland, war deshalb klar: „Wir möchten einen Chatbot entwickeln, der diese häufigsten Fragen schnell und effizient beantworten kann, sodass die Kunden einfach und rund um die Uhr zu den gewünschten Antworten und Lösungen kommen.”

Komplette Case Study: [GS1 Case Study](/uploads/Case_Study_GS1_Chatbot_CoSo%201.pdf "GS1 Switzerland Case Study") 


## Codie: Der Chatbot von GS1 Switzerland

Birgit Kretzer, bei GS1 Switzerland für den Webcontent verantwortlich, betont die Wichtigkeit der Kundenorientierung: „Mit Codie wollen wir unser Versprechen für Effizienz, Service und Kundenorientierung auf eine neue, zukunftsweisende Art einlösen.” Petra Merino bringt die Ausgangslage auf den Punkt: „Wir haben Codie Mitte April als MVP (Minimum Viable Product) live geschaltet, um erste Erfahrungen zu sammeln, bevor er weiter ausgebaut wird. Mit der Integration von OpenAI in die Microsoft-Umgebung und mit der Gewöhnung der User an generative Chatbots durch ChatGPT wollen wir mit der neuen Technologie Schritt halten. Und, wir haben jetzt den Grundstein gelegt für die Weiterentwicklung.“

## Codie lernt selbst – doch mit Grenzen

„Wir haben Chatbots gesehen, die einem vordefinierten Dialogpfad folgen und die für die Kunden nicht wirklich hilfreich sind. Unsere Vision ist ein Chatbot, der in der Lage ist, einen natürlichen, generativen Dialog zu halten”, so Petra Merino über die Wahl des Microsoft Copilot Studios als Technologiebasis, die auf das OpenAI Large Language Model zugreift. „Gleichzeitig ist uns natürlich sehr wichtig, dass Codie keine falschen Antworten generiert.

„Codie nutzt sowohl generative Dialoge als auch vorgefertigte Antworten. Die Datenbasis besteht aus Texten der GS1-Webseite, die als Vektoren von Azure AI Search verarbeitet werden”, beschreibt Christian Filliger, Lead AI Developer bei Corporate Software, wie sein Team die Anforderung für Genauigkeit und Natürlichkeit ausbalanciert hat.
Die Regeln für den Chatbot umfassen unter anderem Freundlichkeit und Nützlichkeit, um sicherzustellen, dass keine irreführenden Antworten gegeben werden. Das Pre-Prompting (vorab definierte Instruktionen, um das Verhalten oder die Reaktionen des Modells in einer gewünschten Weise zu steuern) stellt sicher, dass der Chatbot die relevanten Daten für die Beantwortung der Fragen verfügbar hat.

## Schaudiagramm der Codie Architektur

Der Azure Language Service erkennt die Absicht der Frage und liefert entweder vorgefertigte Antworten oder übergibt sie an die generative KI. „Visuelle Informationen wie z.B. Tabellen kann Codie nicht verarbeiten. Daher verweist der Chatbot auf die Webseite, wo diese visuellen Informationen verfügbar sind, wenn eine Anfrage zum Preismodell gestellt wird”, so Christian Filliger zu den Herausforderungen hinter der Triage zwischen vorgefertigter und generativer Antwort.
Durch die Zusammenarbeit mit Christian Filliger und Matthias Falland, beide von Corporate Software sowie Sophie Hundertmark, Chatbot-Forscherin an der Hochschule Luzern, hat GS1 Switzerland festgestellt, dass Codie mit diesem doppelten Ansatz die qualitativ hochwertigsten Antworten für die Webbesucher generiert. Birgit Kretzer: „Für das
Kernbedürfnis ‘Wie komme ich zu meinen GTINs’ gibt Codie eine sehr exakte Antwort. Dafür greift er, wie auch für offenere Fragen, auf das Gesamtwissen der GS1-Webseite zum Thema GTIN zu.” 

## Herausforderungen bei der Einführung von Codie

„Kundenorientierung steht bei uns an erster Stelle. Codie ist aktuell noch ein Minimal Viable Product (MVP), um dieses Versprechen einzulösen. Im Moment befinden wir uns im Live-Testing mit Usern, um zu beobachten, wie Codie interagiert. Aktuell kann der Chatbot in deutscher Sprache und zu den Themen Barcodes, GTIN und Mitgliedschaft antworten. Uns ist ein iteratives Vorgehen wichtig, um die KI laufend zu erweitern und den Kundennutzen zu erhöhen”, so Petra Merino darüber, wie GS1 Switzerland das Projekt durchführt.
„Christian hat uns sehr mit seinem Know-how für die passende Konfiguration in den verschiedenen Microsoft Studios unterstützt”, beschreibt Birgit Kretzer die Zusammenarbeit. „Er hat uns gezeigt, was zum jetzigen Zeitpunkt möglich ist. Die Technologie bietet viele Optionen, bezüglich Designs und Usability im Copilot Studio ist aber noch Luft nach oben. Die Entwicklung geht rasend schnell voran, und wir sind involviert, können mitgestalten und lernen.”
Die Vision von Codie besteht darin, dass der Kunde direkt via Chatbot eine Preiskalkulation erhält und das passende Produkt bestellen kann. „Generative Chatbots sind noch nicht dafür trainiert, anspruchsvolle Kalkulationen vorzunehmen. Die Vision ist dann erfüllt, wenn Codie die GTIN direkt verkaufen kann”, beschreibt Petra Merino das Potenzial und die Wünsche an Codie.

## Ständig lernen – Feedback und Weiterentwicklung

Aufgrund der zur Verfügung gestellten Webseiten und der eingehenden Fragen lernt Codie ständig dazu. Er erhält auf der Webseite von seinen Usern ein Feedback in Form von Daumen hoch oder runter. Das Marketingteam analysiert die Antworten von Codie und greift manuell ein, wenn die Qualität der generativen Antwort nicht den Erwartungen von GS1 Switzerland und ihren Kund:innen entspricht.
Die Weiterentwicklung von Codie sieht vor, dass er schon bald auf der gesamten Webseite integriert ist, zu allen Themen Auskunft geben kann und auch in englischer und französischer Sprache mit den Kunden kommuniziert.
Bei diesem Projekt geht es auch um das Erlernen des Umgangs mit AI für interne Abläufe und weitere Kundenprozesse. „AI ist Teil der Zukunft von Organisationen. Wir als GS1 Switzerland stehen für Digitalisierung, darum gehört es für uns dazu, uns mit neuen technologischen Trends auseinanderzusetzen”, erläutert Petra Merino die strategische Bedeutung dieses Pilotprojekts für GS1 Switzerland.

## Fazit und Empfehlungen

GS1 Switzerland lernt mit Codie an einem eigenen Live-Beispiel den produktiven Umgang mit künstlicher Intelligenz und geht so voran, um die Technologie für ihre Kund:innen nutzenstiftend einzusetzen. Die Einführung des generativen Chatbots Codie bietet den Kund:innen einen effizienten, fortschrittlichen und digitalen Service. Die Herausforderungen bei der Implementierung und die ständige Weiterentwicklung zeigen, dass ein solcher Prozess Zeit für Lernen, iterative Anpassungen und strategischen Management-Support benötigt.
Andere Unternehmen können von den Erfahrungen von GS1 Switzerland viel lernen: · Kundenzentrierung: Die Bedürfnisse und Erwartungen der Kund:innen in den Mittelpunkt stellen. Der Chatbot muss zielgenauen Nutzen generieren.

- Wissen: Expert:innen frühzeitig beiziehen. Im Fall von GS1 Switzerland war es die Kombination von Technik durch Corporate Software und die Beratung sowie Vermittlung von Anwenderkenntnissen durch Sophie Hundertmark.
- Anforderungen klar definieren: Frühzeitig Möglichkeiten, aber auch Grenzen der Technologie erkennen.
- Iterativer Ansatz: Einen MVP-Ansatz wählen und den Chatbot kontinuierlich mit echtem Kundenfeedback verbessern.
- Interne Kommunikation: Den Mitarbeitenden den Nutzen der Technologie aufzeigen, um Ängste abzubauen. Management-Support einbinden.

GS1 Switzerland hat nun früh einen echten generativen Chatbot im Einsatz. Sie profitieren von effizienten Dialogen mit Kund:innen über Codie und lernen gleichzeitig, wie sie künstliche Intelligenz Schritt für Schritt optimal für ihre Organisation nutzen können.
Sie verdeutlichen damit exemplarisch, wie wichtig es ist, jetzt mit AI loszulegen und die Integration in bestehende Prozesse voranzutreiben. Wir von Corporate Software sind stolz, GS1 Switzerland dabei begleiten zu dürfen.

## Unternehmensbeschrieb GS1

GS1 Switzerland ermöglicht Lösungen für effizientere Wertschöpfungsnetzwerke mit Hilfe globaler Standards. Wir unterstützen Unternehmungen bei der Optimierung ihrer Waren-, Informations- und Werteflüsse und vermitteln praxisnahes Wissen. Gemeinsam mit unseren Mitgliedern erarbeiten wir Standards und Prozessempfehlungen und schaffen Nutzen für alle Beteiligten. GS1 Switzerland ist ein neutraler Verein mit Sitz in Bern und Teil der in 150 Ländern tätigen not-for-profit Organisation GS1.

Mehr dazu: [GS1 Case Study](/uploads/Case_Study_GS1_Chatbot_CoSo%201.pdf "GS1 Switzerland Case Study") 
```