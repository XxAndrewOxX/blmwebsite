import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import {Helmet} from 'react-helmet';
import  { useState } from 'react';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.background.default,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),

  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const classes = useStyles();
  return (
      <div className="App">
        <Helmet>
          <style>{'body { background-image: url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhMWFhUXFxgYGBgYGBcYHRcYFxcYFxoYHSEaHSggGholHRoYITEiJSkrLi4uGB8zODMtNygtLisBCgoKDg0OFxAQGC0dHR0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLSstLS0tLS0tLS0tLS0tLSstLS0tLS0tLTc3N//AABEIAO8A0wMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAABAgMEBQYHAAj/xABGEAACAQIEAwYDBgQEBAMJAAABAhEAAwQSITEFQVEGEyJhcYEykaEHFCNCsfBSwdHhM0NygmJzovEVU5IWJDRFY4OjsrP/xAAYAQADAQEAAAAAAAAAAAAAAAAAAQIDBP/EAB0RAQEBAQEBAQEBAQAAAAAAAAABEQIxIRJBUQP/2gAMAwEAAhEDEQA/ALTljTWiXCZqWewG3FNXwo5Efv1rnaEsPimGkGn9nFzy+tRgsHrRjbimEv8AeBXFp8qiblw7il7eKPWlgSi7cv1pJF1pr96I0ifU0a1jfKlgPih3mhU6axHv/Wut66j6/wBqUC+560wSuAb8/SnGG25frTd+sUthPMUT0DYjbWjWzA0/Wi3ztFFzTuQPKnQeMdP6UQP+zRk1XYUgt0zH8qdBQt6UK9f60QgU2x3E7OHTvL91LabZnYAE9BJ1PkJNTJaNw9Qx/SjFYql3PtN4ZJBxO3S1iDP/AOKKVs/aVwtmAGKAnSWtX1HuWtgAeZNV+aP1FytAGjAa/wB6b2cQlwBkIdTqGVswPoQYNK5vKKAcb859BtSKenzoNP7zFcYGo196QKazqR+lKZPakbbE7wPn/WlSegpgoG9P3711JSfL60NBYr+WgtoIjSiW706Gli24G9SZE2xP9qSe0GETr6GnAWdz+tKKgHSgIZ1rrduDJ/nT24sg6AeelJG0edAEcg9aTtr6115uQOtR/F+P4bBhVvXB3jxktgrmIOmY5iAizPiYieU0TbcPxZLLac/lSpOmg96zu99pdq2SrW8o/K3eyGgxoFtF431IAMaTTHD/AGwWSYuYe4qzoyOH065WVD9av8VH6alnKiImetRXHO1FjB5VuFnusPBYtDPdub6hRsNDqYGh3IioS99omA+7veS+rsi6WiGS47H4VhhME7kSAJNZxwrjttmvX8VeVXcTdeGa5cLMsWl18NlAPhHxZCCVGUipzhatmL7W8WxLAYax93SZhbZxNwgEjxGMg9AAepqH492i45Z1uPdRR+Y4VFEHrFtlGukZp8tqtnYfiovg91YcKhHibDhA/oz3mjTkNqmO0uGQiWRHZgB/lKY5qHDq2nlU7/p4pfAvtevWsq4y3bvIR8dgqrj1QkKT5EJ71oXBO0eGxYNzDXQ4EZhBDJMxmVtRz12PI1h3brAi3czjD4iyG/8AOAILDVsrhmDASnPmdqguAcZuYTEW79snwsMwmA6SMyHyI0+R3Aqrzpa3H7Te3n3ALYsBGxDrmlhItIdAxE+JiQYB00JPKcZu38Vjrne3DiL7AxmVGuZSdlAWFTWNBHoab8X4ncxuIuYi5Ge40nWFUAZVWTsqqAo8gK1fsNwW8LKNiLuJW2BNpQ33a0OWihhdYGTqyAENsZp+Qmd3+y+OgFsI6LyBVbZIJ5mJHq9RnF8E1pwpsvakfCzZvWDlHkOe29ek8TiXt2yUKKAN2DlRy3BHPz106zWIdtCHd2Y2V0JVfx0J5aByw5f3ilNoqO7G9sL/AA66GtsWtEg3LJPhcc4/heNmHOJkaV6Wwd9LttLttpR1V1PVWAYH5GvIYOtbx9jHHTewRsEy2HbKP+Vclk+RDr6AU+ocrSy3XlzodKbpcHOue5r5fKKjFHKrG37+lHB2603W9SqqDvpRIZQz0J85FdXBPMV1VgVpI5HLRledJB9qTtgHU0a0JPOKyAyEj3o0yJn9+1GC6Hb5Uj3Znf2pgZfI0S/tNJ4rFrZGa9dtWx1uOqT/AOoikvvtq8v4Ny24623Rl/6SRSyjYp/bntR91C2rTAYi7GUkZhaQkg3COZ0IAPmeWueYniBDXTYLG4P8bG3GZ28QykgpItgnwjKSdAMxBiontVxX71jL14HwM8J/y08Kf9IBjqTVq4Pfwos23ZstpWPd2Vgu7DTvLvgbPdJGgAOUERkiW2knMRfqlnBsdUVjzmIkGNQNyPPyps6EEggg7dK3bDcItn/4hLly4ygrbAFx1UjQsS2S0AZygvlG8ydIDtR2V70nXC4dYmbgLXF1PxGwhVRM7u0USlYyUGnGBIzZmJAGpI36CDyJJGvqaSvW8rFZBgkSpkGOY8qC1JOXWCRMa7frzqian2X+0G8zLaVEERlBLEaBtBEFnY5d/PppYe1HbfBqotXL15bseL7uzLlI1AJBjoI1nmAKz7hmNOAZbdpUa65UhmU5lkmBoZnnCkRlG8A1ql/7P8MWd7c5iWyylkwpYmDKZnaNy7Gec1nmKZLx7if3lBkD3WO7XUsM+UA6i4iJc/2sCNaq97COolrbhTsSrAH3Iirtxrg72r2UKRDiRspIdDqB8QPh9l8jWz2MFZv4dSgdEYHRXuWjuQZyOIadz1qp1pY8x4S+UYMsZgQQTGh666e9anwDtotgHvsRYLnVyTfvAhoJUdza6jndPp1ovahMPav3Vw8kFmGssFBOsMSSTynffY1BCnhNE7T9rcK4YW894kyCL+OtgGNGyu2UEGNI5VQMXiWc7tHIM5aB7+/zpNloopgCmtA+xjiHd8RFokhb9t7enJgO9U+fwFf99U/h/C3utAgCGZmMQqp8THXYbeZ0pw1q9gMSp0F6y1u4IkgNC3VB28gR60qHqG2upEnT2o90E7g+tBw/F28RZt37XwXEW4vowkA+YmD5g0ukTBqVmZEHnT3CXJOpM0S7a8vqKIQQaXh4k9ek+c11RwxQ6fRq6noQx01n6f3rsHdg+VF1jaj29NT+k1kZbH4q3atPduGERWdjEwqiTtvoNqx7iXaDH8RbNbuHCYUsVRUMXLgU+IjLD3CPzGVtg6EjncO2+P767Z4d4itwG9iBbHiNm2fBaBGzXbgCjnJUCZgwPEbffXWwqOqWgEGKuporD8mDswTFi2sgwfEZJIma1nxCo41cPbR1s2lOQ+K64W+7k6ZszEIuv5RJEepqqPjrufOLjhoiQcpiIjw8o5VpHHsRbvrbsIqu2bJbtWkMIDBhRb1JMHroCddqz7jnD2s3WRkKHfKSCRy1jbUGq5+kjqt/YZ/xGu6BkBi6694mHQ7sqSM1zUwGIUanWqgKsnZq1auvbGI1tqYKIVViJ2JOgBO5kHoZiihdcP2ttjNZwVi9jbzHM1y7oGeNSUU6nkJPkCdKk04PiryzxBktBmE27YRQonQO7EiN9FzHbxLQ4ztObSJZ4fZw9liAO9JUWkzjRFGWXc+EwJ2Wc21RPFezzXLZxGMut+WTey2gDvH4mW4rHxALk57xUGrnbfgVmyBew5t5C3d5bWcqGWZku7PO2pABmRA3qeHG59hrGp0/SavXai5hxh1src7wqPAfF3YDRDKYESVbw6g94CdVqhWhOnmPrtV8+JqT4SufGWVY6NftqSxmAzhTJ9PSvQOH4xewxWxjLV1xEJibS5xcyzpcQeJbpABIUNmJMV5xurlbRtRBBB2OhnTYzW6dh/tDsYpFs4ghLxEeLQPvziJjzqelSrViOG4aO+a2sbloho3M8xvqD/Ksb472uu2rd21h77dzdLKRluSssZhrgEFgYJEkwdZM1r2N7O2bnxNeynXKl1lDbbkakaDnUDxnsHbu5e6FqwpBBYA3LzTIPiuEi0AOYBYydRRPgYNcstIBGp/LBkawBH0ipXC8MHdp+G1y5cchQrR8IkhBz1+O4fCNhrJGxYfsbhrPgsWkZ4h2bP4cyx4iSTmidB4zn3Qa1H8Y7JeIqjFi4CZjlU5SI7uBCpYBGiAZZKiHaBR+4PyyY4QF1tWzmYnK7gHLqQPDpJUfxc+WmptvE+xD2LdqyEJu3WDOSRpbGgEHVTm189Ryq7dkexdtAWyBlYiCJGYK2twnMSUjRRzJJM71JfaNxi3g8Or5WNxiqI2WSoQhwMzeajSZMneltvgxQMFODcSsW7eFtG6uUFj+It0WwVJE3L4yFjqVEdIpPHb2a+5Zszli11ut1tXiOQaVH+mnWI4ywAtKcpiznYzPeWUbLP8Apd2O2pVT6xeJCDRDm03iOfSTyjfmTVwtb19h/FO94ebRjNh7jJH/AAXPxVPzZx/tq/vEyPlWC/YbxQ2se1ifDftMI/47XjX/AKe8+db3vvIPtU1UGAHMaUa5anakQfel7bToaSjc2V6H611Oe4HlXU8JV7REwaWk/l+tNU8wKVE6c6iCsK7W9oXTieLe00AutskATlsgJC5gR8Sz7A13Abd7E2u7QkWRcXYZnJC5UWQdWIEBRzk6CojtdgGtYhmb/MuX2nzTEXbbfVfrU/wbtYy2kt2slk27eTPmJdyZkJ4T3YYxOUZjlEtWvSIm8Tgnw1gm/fOH8JLWLLp3gRiYRroU5JMgqkhhyUCBneJsE+BFIUagAbk6SeZJ8ya0HC8FtXMzslzEnxgWrUyD8He3rojITk+E5yszlg1XgypjWTD4dC9wi2qyXVCy5WCj/MOoMnmshRyUvzQqFy0V3Ec/qR+oPyqY7L4kJcPhU7EkztMflZSV1BIDLOUSYkGZ+0PhfdCzcNxWZwZyEFVhiCoI0MHppv0qq8MnvFAmSQNOeo31AOsb09+BaeKdo7lshcKSCJUYg63HA1YJOllNRpbCyNyQaa9nsTea8br3rgKaFgwDEEN4Bm0APSP6VO/+zVy4otC3cIWWGimWOUBUMgESXkDou2tROEwJtG8TcZW3SUZXKtmAcDYN8XhBnMkDlU7LDxZv/BkxNjFqhKnKXVdhGaRtKn4IJBMltIrKmketeheyeEAwqZsznKyEkfEoaAVB/KRrr0A6VhXaDBm1iLls8mJB6g6g6+Ro/wCd2DpbcR2a+8YdL1pphCAp2IUbz+UciNgddNSaViLJQ5WEeRrbvsytriMCySRoBIgGNiNd5yRtyNVHtb2AuWs1xAziJ+JRkHwqsMxzDTcQTIAEzBz0WK72a7Y4rCeC3dIt6+HSASIkSCPmCPKtT4Nxl7wAuY+3DmFFtjnMHxDvHGXy/DC+oNZGnZjEQfw2J/LlyGT0jMD7iaY3bN3DsM6MhnZgRmynY9R5UXmXwPUtiygUBVgAbCDv+pnedSdTrSJw6FjK5tI1GgBEHQ9RIJ6GNtKxLgP2o4m0VW4Fa0NMq/hwANIYI5id/CSZ3FKca+1C/cMWwACNspUDXYeIs+n5mI8kXnN5qv02nD8TtC8LCspuGfDInQBiSN4AjXaSo9Mm+2jjq3b9u3bfMtk6BdVLwHduhGtpR/ofrUVwXtauFtPcWbmKvfHdba2syLag8p3A3qpY3ENfcQJZoAA1OmkeZ5k8yarmFaZZ5MnX+tHUT6+VTnZXsliMc5FpJVRLMTlWZgLmgwSfXnoaNxxlsfhJaRGUAFlhwSVBJDFQxYTuYjNp1qtSS7FcQGHx+GvMQFW8uYzACP4GPoFYn2r1LvoTr5V5AH9q9O9g+KnE8Pw11mljbCueZe2TbYnzJQn3oqosCodp/TWuDlfTz/70BGs0cH1M+VQoIZuQ/WhoFOm9dRoVtTJo6rE60BeDt8qKw1qRWNfardt969kRnt3jcWOS4m2ruvtcXP8A/eqo8Ag3lViQGO4mdAYAj/ij5Vb/ALVsLlxF1shIfuXFzSFc22QodJhhbkbfAd6oFm6VYMpIYGQRyNbX7ENFuWMWVOHcXckBbVu2SqkgQudvicACTpqSdwBUm2DtcOtLcdhn1TKmjXhd31CzYskCB+YgTPiinvYrt3YvILNy2Ld0qEZvDlYemhy8yADHnvUt2h7P2e68d+czMQ1xwMxInTKAzQqKAqzouxEg5y1TL+1WPbEWBddVzZ9Coyi2uqraUTAVVCiB+tVW3cI26g/Larr2js4dcO33cm6QxDXHXLBJBK20yjKoJO+vkKo1XPEt37EY+3j8L+IQbtpgFPizJPiXf4gplfRRNDxbgWHZ8vest0AZ7dtblzKWzaEKC1tGJzAsVE8zM1j/AGb43dw1wi3dNlbmVLjgSVXMDnHMMNdRrqRzrZ8K9oYfu7V9XSCWuM3dg5wZaSD421liC5JPiBg1neJFaleG42zYt90xytbC50hndC8EZxZVoM9JEayRWH9vr6PjHNsysAD5n5CNhyEVo3ERctpkwoRQJbvWUBbaMBN1FfwopIb8W5BJmC5FZ72z4WiMLtgXjaMKbl0ks9zWW12zAEgdANpq+JImpD7Mu1IwN1+8zd04hgsmCJho+mnUe20XuM4O5ZL/AHvDqrKQjXHtx4hEwza+m+leY7dzLqP3/art2X7V2LIbNaCyuURcuKSzHUzbt+Fdp/NoIovP0atGE7Y2GDG5bd2DNquVALct4wbjIpncSSdei1Xu3HF8LiUlHlxGVdGK/ESCUJXQswHlFRfGO0Vu84urayXASQzXLl8rAgDNdJLjlBiN+lVu9eLGeu+tE5g0iaCuNDl0mrI94dhM9xbZFwkn4UTM/sCRy5mti7N9h7duy1zEuLOHIlrS3A73YmO/uIIj/wClbEdZqB+zrtRcuxhXto4+IMcsjLBaJUiWUECeda9geF2iFLq1wr4gLjEhWjfIPACOoXTlWe/cNSPvb4le44XZVLIkG8cyWEmB4VgG+0A9RDCY2FK7QcBw+HZs1xbj65y10Asdo/CV8jTrlGw0mt1x2IyDMwYwNkDO24Gg3O8/Osd+0TjCMrD7rcRySpa9bfUHYTmGU5gCBp6GKJ6bMn0Mae0x9a2v7CeKB8PewpPitOLi7fBdEED0dST/AMwegxF2kzt5Vc/sh4gbPE7Q5XQ9luXxLnX3zolVYUei9R0PvQICf+9CpnYUJGn8ialYCvp8zXUTK3I11LDQaqR5jz0rt/Wk3k/0o2eOX0moJmv2vXDbNi7Csri5ZuKRIYKQ6dIILXII1EnqayV45befKt97d8NXE4K8rg5kHeW4GveL8IA5hpKn/VPIVhv/AIXch2CmEkOeSkEiJ2J0O3StufEU1tuVIIJBHTSrPwvtretWnttLZuZMyOasNMy+vQb1VmEaUWqwk/ieJG7bKm4FEkhFWJJjQxAifU1DX7BSAdCRPtRVuECNPlXADn/WgCU7wWMdCMlx1iYysREiDsefOmhrqAunAL1kqvf38MQCXNu7cxgDMSvjItgLnAAA15dKT7e8RtXTbCOHKiBkuBrYHMAfl5eZ1JJJqoUBpYBqLRlNcRTAytNGCzXYawzsFUanqYHWZOgHnWj9nuzVlbdpiQxulyGME3Ldkw7Io1CFyqA/GQXYRlAKtClYXgV0qbzW27lGth32AFxgo19496keKdmLi2XvKuiXXUrsVRXdAdvFDIykzIlJGoJ0rHWkGD4jh1VwgsKyArlHgw9t3ZRJgSwbLyH0Xu8NbFd5g7jKLyZ2tXIyzdXu7jFo0Nq8SLjLrGh3UGp/R4xpBdwt1T4rZjMCRMg8/McpH61p/ZDFcRvEYpLpxKAnNbN1bZVgdI0uZusZfrVdx3ErV+zcwGKs93ess/cOzhTauAeOyxIggldNgZ1IMGqzwlrKtF/vEKMfHaaHB5EzoQNdoPmaMD0HwziK3QPxmnMQVdsxDjddbVsyZEA5vICKhu2178J8rqGPhC3c1sszgoAmdfGdQwyncAxpNRVrh942vvSX7ePskeK4JTEIAcwGYCbpEyUuw2hAgkEN+Ndq7P3O7ZN5j3iMpzLmkmAQV7xmttuROaCwI0E1P9PWT8RVg0MuWNhA2nTWAWjbWdqe9kb5TG4RxMjEWf8A+i/ymoy+wJkAKDqFBJA8tST8zSmAxPdXEuD8jo//AKGDfyrRL1mI1E0qes8udJJcVhnXVWAYHyOoOnlFCv7/AHFQsrPkfnXUFdQFct3o00pUHmPlTbJHOhJ96g6Zdp0H3PFEiYw186eVpiD7GD7VgGIx5+72rKNA1Z1B0LSYJ845ctK9FYlxkadgjTPQKZn2rzPhGAIJEnkNNztM1rz4m+l+G8Oe6ZVCwmNt2/hGmpjWOQBJgCacXMBeugsBKjKMxKKNZAiSAwEasJA5mrNguKpYsCQGZyQqtrbW3HiuuNnBMBLRGXTMcxINQNzEXsZcIzkW5/MdAJAEz8TEx4dTJgU9JHWeHkyTsOYy5d4+IkDfpNOL+Ew4GZbp/wBIBYierZAvWtP4H2FDrLv3Y2+EG5BEkeOSmpnZfQTUvc+zHAncOWJEs9xyTrrERqepkb6Up0MYM41IGo67TRa0rtn2ZwODWQHEyEzFvFuCVkAv9FEfEdqzm9vtHQHf3pkIK6jZdJ/frS+AwZuuq7AnU7wOZA5mKYNVNSeE4eTabENC21OUZp8bxIRRz6kyAAD5AhfwOVh4CQHCZZ1dpkqMuxiNpiR1qz2Oyt+6+EtvmzXQ7BBtatoQIAO2pk9Y57k0Ijg/Z69eymGHeOtpdhLMCxHiI2QFvdRoSJ1jswVN26wkrauJh7YKrpasO4AXVdWugmemUcqcca4QMP8AdgoHd2iziNPF3ljXbVpOWTpBHSpHs3YHdMhgkXsQrA67Ym6dth/F7zWXVVIS7ScOK2rhtgDwWSRG4a02EcRtootmRy9BNN7MceEYa9ce4zgBXJMkd0O7uodOaOjAzOvlNafedbrPhboPjtkCPCWQjxBSDMjedCCD0rBOMYG5gzibWYsVukOYylXRybN8EDmtwiNout5EPP1Bq8faXwiy6DiFkC6sBMSFPxIRC3t9LiaanynY1nHEuFdzlxFh1u2WJIzBSygH4bqEQfUSusSDpVo4N2tVQpfKyXEyXEYAgkyrKR/ARMERGb3NaxGfCMVBJsv47Z1h0zae2mUxsykcqc3+kmODcZwplrdy5gbxHihmuWHY7iDqoI/K0jQDNUP2ixzXmDXFs95AGeyModRMEgeEkzvAOgqGv3FmU0B5HceXnHWBSatVSEBjNCKCaEUUo9O9g7xfh2DaT/gWxqf4VyH/APWp8ka7VX+wyZOH4RGBB7i2SDpEqG/nU/mmoaQmGPKupWV8q6gK8PKhJNEfbQUJJ0+utTDCiBtGGhMEdQdD9K8xXrTI5Q/EpKkeYJB+tenVtx5/yrFPtX4KMPje9TRMQDcj+G5MXB7mG/3xyq+fE31Gcaw5tW0tDxNcMflJyocmUASYzCJnUqw0gzPdjOBOWU29YlS5GUhgPxLdkzoIYB7sAjYEGJrODVrrq5JGYi0oWSwQQrEadDEzuxrZcJh1wWGQuNSoXIIYwB4bYO4QSdBOrHckkrq/wRM4G3lVV0gARB0iNIk7U+e7CknYCeQ289I9aY4RyUVrsZmEwpGk7ARPLzNIcbxqWbLXCRoDlWYLtsqggaGY15b8pE8qrKftD4sO/JAHeGJO8ZZA1Mlo5TAHIbGqXg7Od9fU6jmR9SSKmrvDLmI77FXSFAM6AAHMwACjkozDXoRqa7s3hx3V++YzIVVRuSWDNI0OgCknyBrXxmgwCzZfONNq1DstwW3bt3LjLoqEg75mGqgT1NuNBqGPMis54VBvLP5m0J1gzox9415Vs6YUHCrayj8RrYK7znuhBuSSvjMnkoPvHdORD9n+zRN57zwSiLctrqQl/EuWB6yLapHk6HQ7Wjs9w/8A9/u3GGlq1bsJpG/4zHy/xI06VN2cFDXX/wDMvB+WgRUt8/K2PnS9gAPI57nroB+gHypX7VQpxnCI6hTHiKg7yAHVgRHPMFP/AGppYsBGIiM7lgImGZQWUepDH5074gsqSNwJHLUaj60hZsK4yEeGAIk8tj4YIIgEEaggEbVPXoK8UtMbWe3Pe2j3lsToxWc1sg7hlzL5FhtFZR2le22NR7ig28XaVHbUq1xZAPhIIOQ2zAgHQxBrWExJtFUv6qxypd2DE6BLkD8NzsGEIxIjKxCVmXa3g8G7grpJILXsPcIktbd/CjTqSjG4pjSCugmtKlnXH+DXMMxkeBtVIJYAEA5SSAZEgSQJ3FR9zEsVysSRykzExPtoPl6zasHxP8NsNiQGePAW1BDKd5BnkQdCIHSqjcEGOQ2pwqSo60FGFXmE6KtPYDsu2PxaWmU90njvkaQg2SeRc+Ec/iPI0Xsh2OvY24qqsKRJZpAVNR3p/wCHMIA3cggaBmXf+BcEs4KyLNlTAMsxAzXHO7sYiT02AgCppyH3dnYafoKEnLyn3FCW0oyNO+nvULAT5H5Cupx3y9K6gK7AnSaLpOn60YL6UTKQeVSY4bTl61Sfta4T3+D74Dx4ds/LW20K4+eVv9pq43BBkH2/YpHjWDF3D3rZ2e1cX3KGD7GD7U+fS68Yb2Fj7yrNlKohPi2ABB9t4/3edbH/AOI2+7bFXZKLKqAsn4soVV/M7OMojmOQmvP2FvOp8BILaSCR+lar2WvrfNoAjusMAtvLmAe8QQ12APhAlFP5R3jaGDVdT7pRdeHW7jDvsR4WIkWxqtkR8JP536tt086z24c3Gt2yWCvJA+GLQ0LnoXYhQP4Vc7HR5xTtGYVbZXO7ZbSjUBBE3WA5Too21OhigsYTvMVeulg5D27Ma+HKrXY6fBnnzeTUS/Tvim4DHi5h7tndVwlxlB62h3hEcyYn0qqcL4h3VjELrmYQB/qBQnrorNt1qxcXw74bFFEgk2y9oeId7Zu22S5b11LRoPTaqdjSsKVOhBB6ypifdcp+daxJXDDJeSNQHtnXTmDH6j2rebTZxZYpEXE1gaEFogjl4SI6etY5gkzBHMFWUKwk6BiQsk7QQef5vOtq7MEtYRWJ8WUBwSZ0zZtfNY15mKz79ESoJDGDInY8idZHsZj5dKUwl6T5elMTxEqyBgsuxRuodRsPI0o9olw1tgrE+KRmD6bkaa7agjzkQAl/xIYxMw39dKj7fhYaxrUriLbER84MVSe0WDvKc1pr+U7lHRyhmcwt3ImCJ0byijuCL3esd5bZTlMggq4zKwIgqwjVSNDvWf8Aa7CubPepnufdmJVWP49hoXvLWYmLqFMjCfF8Dg3BpVi7L8au3UIuKgdIDgZl0MFWAzHRlOYbjcT1U7VEKvfWjbN5YVkYjLdtSxKONTAlmVwJSW3VnB05+xFYfxZLd9BdttlLGUJygZl+NCdlbVT0+c1Vr5M+Lf8ArrVt7YWbDA38K6qlwjvLRKh0uiZzKBp5MpIOvWqgxmqhC1ofYv7P3vw90hCMrNKZ1RWXMoYZgDeYFWCGQq6sPEgMT9nvZtsZiBlMBCGYxIQfxGdM38Kn4jyyq1ehcDg0t21t2xCrOmsmTLMxOrMSSSx1JJJ3pWngOFYFbIypJzHM7kyztEZmPM6QAAABAAAAFLspncfSut6Hn9TRweZn9+tTaYlwD09B/agCnlSoeev6frRWU8/pSNwJ6fWurgnmfp/SuphD2h5TXP7fOgtnoINcw11qf4ZtcImpFCGUDrpr56VGOgn+hmpMJ4emlHF+l148sXrZRijCGUlT5FTB+oqa4Nx17dvu58ImADlPjMMNN1PPyAGlLfaFw02Mde8MLcY3U6EOZaPR8w9qrgH0rWzYlovZ/F5r1nEGNVMLG5tuBl1IgBY23OmlWzD5rffu0wMUt2QTrbuWMjtzICrccaD/AC+oM5lw3EK+HVc0NbObUqMpBkkT+Uga+prSuzHE1uWyUKBlOUifCVuHvrLk6kBbr3kg8mYzMA55h6rfHcWHBsuxGNwdw3MNcM/i2lYuBqdzAYD0gkTWd4x1ZiygAMScoEBZM5R5CtF7e8IlBcAYlA5suACWtCWazcja7ZbMJ/hg8jFAxWHKZLk50bxA6bjdT0Om1XEnnAceFm0xhXkT0LQQT5BgPma1jsjxjNhLlmfx7EnLEnRgweBEg6E69elYzj8NlIYfC4zL77jpKtKn0p/w/jroyMCc6QP9aj8p67D5fNWHGkcf4qHM23BcEgpIWWUSjgx8UApoRPdgb5asXAOPW8RbR8wBPhYH/LufwsDybcctYmIrI+JcYK3bWITMRkHhffKVKlSQRmXWOR0FOuMcRyOMRZbMtwDNpAuabMCP8RT4SfziDAOap/JytutXryDNKsmzBizQIMMDMqJ0IbOdZnSmj4kMShieY9fXWPas/wCz/wBoYT/EzAbgyCQDupMEONoJXNEjMDvJcR7SXsy3LYtXUzHK4SJEBtC19fFBErppBGmtTZVSj8XwL2rneYdx3ttDFoiO/Uasko4baGB2UnlyrXaD7QLl6z3ZtqJVkJkn4hBV0cRmH8Q+elK9pe1N97ZVlENLBgrhlgyLbAXCCs5iCZifSs9dyd9/1q+ZkR1Rb94sfQR7U/7P8Gu4u8liyJZuZ2VRuzHko/oBqQKZWMO1x1RAWd2Cqo1LMxgAeZJAr0J2H7Ipw+yFMNecA3X0Mn+BZ/IuvqdegFW4UTHZzgtrBWFsWRCjUnm7x4rjHmx+ggDQVLAdf60QHkBHyodf2ahWDogB3rs3Wf36VytrvXA68/c0GAXJ2j21rixmjq4PpQqdecdaJ9Ghnz+orqA2x1rqrC1XkuiddqG8YMa+0UU68vpSu6humhH6VCiGHEmDTwvBgU0W0ZmfnSzkdR++tEhVRvtZ4RnwpuZSTaYOp3hWIVx/p+E/7PWsYYV6X41ZFzCXlbX8G6D6d21eZq1niC2DxLW3V1MFSDuRsZ3Ug/KpjBdontXvvFtUDaypWQwYyfQExoOlQNLWUZjAWTR6a24ztSLtp1VQltoLWe8kBtRmTNDKYiMpMdN6qy41gpt/5ZMwdYPUdDQ3rB0kIvo0/STTdkjn/KgknhMeDZbDXBK5s9p//LcwG/2OAAR1VTyMxZWKA0oXBifeKAA3DAEmBsOk9KNbvkabjUQdtf0NcEB0mPWhu4Zl1IMdeVAAtz5fpQrfZRlBMSDE8xIB+p+ZpJaWsWizAAFucAxoN9eVADfxbPGZifXyoupO2v6zSlyzEgwsn/UfT1qa7P2FtpfvOvjt2ybeYHKjtKoxABz3C3wLsPExMJBAun2SdmgbjYtxK2ZS30a8Vh2HUIpy+rTyrV42Ef2pDs9wtMNhrOHUAC3bVW83iXO25csfenFzeFj66VHUODIf3NLG5y302pszQQZ0/fSlFcGfpUyqCsA+fPejuJ1mPf8ArXNOkTt51xEjUSQelOTS0Nv1ny1pVXPI/Oi2iNP5VzjeBVQhpbqa6gV4611MK1h3IOWafWk0II0I5/rpUetwEyRT9D86iLpoFgxpRtTpSmJQ7n9/SgUUgcBAUKsZDAqfQgg/Q15wx2JeyWw1y1Zbume3JTxSjEHxKQd559K9GTpWYdp7y4V8dbv2YW/cN21dylgc2Rss7KdD0NaTxFZW5kzEeQnT5maAGnGMswZlSDzB8h5AjptypuKYKd4YidN486UtYcsYMLOxY5QdOp0pECp3gfETZIZLl1Tlghe7Kwdx4pA5bqfamRnhuCXHjLkM7TcRZ9M2nvT2z2fuZhmAtgmAboZkY9M9oN9Y9acXeL4ZxlvYdZknOo7m5rJJZkDBzJ5qBoNtamuA8ZwlqBZxGJURBS7atXxGumgBUb6hW25TrNp4rHE+DPZjvLTJH+YpNxH5gjp8/YVGAmCFOh5An9K2LGY/C3rTKl57bkEf4F2AX6yoXKddJiqHc4LczFUGEvTIg3LVsgxqR+Kp00OvrECiUsVQacqUtOoMsoYdCSP0M1I8RsKjFSmXTQJftXRmnWSs6eUyKjLg6Ax56/oKokgnFtRlt27ewlUDEAT13PmddN6vHBrTNhLjdxkto1q/ca65a5eUXLfkIZxIUxCpKgE3GZqHwh1DrLW0M/4lxWdU88qq0keh1rT7OCtPw/F3UxV68xAuvdZcve3bettCtwZu77zLpEmV8WmUTqmqXn1Oh3OvvRSvmKC80TO/ODpPrSYI6xUdX+Q4MLc8qUnKDTYhR5+wNLpt1o55K0db0Dc0He5ZI1B8/rSDJBn9TFPckrqOVXASs3ZinN8Mdmio0WyG0OlSCTpRPoJd5GhJ+tdRnttPL5D+tdTwK9eE/DFHBMefrRGfQTStm4D6elZrAt4kEGjWbsiga2c2mlIXjkaeu386WA+Ua9KHEYZbiFHhlO6kAg/Omdm/ThbgO8/pRLgxRuMfZ7hDmdEKkAmFJgwCYif0rOeMcJs2Wg94o6+Eyf7Vvl1VYiJkedR/GOy9u+GOVVZt9AVY9WHXzHWq5tR1GEvg7I1sYkkgT4k7syJ00ZhsNPWpXhvG1tyuJwdrEkc9iBEboCD71ZeL/Zk8zbUL/oZYPsxBBqA/9g8ejeAQeRkrr6jQVVJMcLxGGveJOGmFlot4oAAj+IXCMu4n1p/hMQiEKcFlIk5O9suBI6qsEaakmagV7OY5WzX8J3kHxTbVgy9ZRgST/Krj2Zwtlf8A5f3Zn41BaCRqSCxjlv18qVMbE4xsqm3w+/cADd2TfgCDrlCXCR66E1C4jF4kgF+HWAobQ3u8uROpEup1860ALEg5jp+Q5eYPUR8+dRPFMbiA/wCBhWc/Dq1uYGoggMw1JIJETNTp4pXaRluqqvcw1hQp8CXLgE7jRbPWdx1FUfu7YaM5O2qsY9fFbBj2rSuOY3iLErew4RH2W6OH3iPY4YM0GI8+c004R2UOIvr3mFQ25Gcm2bIA5x3LqC3QRrWl6xMiN7J8Nu4sqlk2AQILvYV2UAc2jU6jX0rUOAdmWta4i8L8EFLa2bdmyhEkMETR3E6M23rBDjgnArOEBWzaCzuREnyJ6baVIkx+zU7TLXZ20+Yo9jzH0pvbHv7bU4URzokFoDvp/SjKdNTHvXM/z51zxA607SEu67fOacOhIHl5imC25aaerJESfalDpC4ddx7CnFhh1/fzpK9pvmmjYfX+9OfKDps3UV1Dn/cV1WSruJ2pG2SN5p09IKawrSHVppG+tDcQsOsUlhrh8qWVZO2tOF/TU2hGhpTDzzFJXRBI5g0vhjNT/VE3gNmOxp0Lqxt9T/KjXrY2ppk8qtB+twERE+5pHujy0pO0xXenIv8At7UAgFjnS4fTcUCCTSeK8I/ZoIjbnNI+tCwub21RmnUOzIIg81VjMxyotk61IYdPP2pcq6R+NOKiUTDA/mDXLpzDxRBFvSPCdjuw8yhabFCDlsROsvdnL5Qhg7Hn08xKY1wCBRBO9V19qZ4Swz3SxzpbC6wQ7MTrpoVAHzp6sEa6ee9BbY7miOwnpQCdpjmjzp7lP7imhOo1pdZiZogKhid6RuA+fz0ozyBMk60TNPLpzooGQAc6XZo8/eiqNYozGqkwtJvdMdK7D7TqTRZ+dDhZ6zSMc3j0oa4vQ1Wk/9k="); }'}</style>
        </Helmet>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar} alt="Black Power" src="https://www.urbanprofile.com/images/products/secondary/black_power_fist_ladies_style-1.jpg" />
            <div style={{fontSize: 36 , backgroundColor: "#234B05", borderRadius: 20, opacity: 0.75 }} >
              <h1 style={{fontSize: 36 , color: "white" }} >
                Enter Your Information
              </h1>
            </div>
            <form className={classes.form} noValidate>
              <TextField
                  style={{backgroundColor : "white" ,borderRadius: 20, opacity: .9}}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="First Name"
                  name="First Name"
                  autoComplete="First Name"
                  onChange={event => setFirstName(event.target.value)}
                  autoFocus
              />
              <TextField
                  style={{backgroundColor : "white" ,borderRadius: 20, opacity: .9}}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Last Name"
                  name="Last Name"
                  autoComplete="Last Name"
                  onChange={event => setLastName(event.target.value)}
                  autoFocus
              />
              <TextField
                  style={{backgroundColor : "white"  ,borderRadius: 20, opacity: .9}}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Location"
                  name="Location"
                  autoComplete="Location"
                  onChange={event => setLocation(event.target.value)}
                  autoFocus
              />
              <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  style={{ color: "white", backgroundColor: "#234B05", borderRadius: 20, opacity: .9 }}
                  className={classes.submit}
                  onClick={mailTo2}
              >
                Justice for Breanna Taylor
              </Button>
              <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  onClick={mailTo1}
                  style={{ color: "white", backgroundColor: "#234B05", borderRadius: 20, opacity: .9 }}
                  className={classes.submit}
              >
                Justice for David McAtee
              </Button>
              <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  style={{ color: "white", backgroundColor: "#234B05", borderRadius: 20, opacity: .9 }}
                  onClick={mailTo3}
                  className={classes.submit}
              >
                Justice for George Floyd
              </Button>
            </form>
          </div>
          <Box mt={8}>
          </Box>
        </Container>

      </div>
  );
  function mailTo3(e) {
    e.preventDefault();
    window.open ("mailto:police@minneapolismn.gov?bcc=minneapolis311@minneapolismn.gov; ‎citizeninfo@hennepin.us; ‎info@mpdfederation.com;&subject=Justice for George Floyd&body=Hello, %0D%0A%0D%0A" +
        "\n\n" +
        "My name is "+firstName+" "+lastName+". I am a resident of "+location+" and I am emailing today to demand accountability for the racist murder of George Floyd.\n%0D%0A%0D%0A" +
        "\n" +
        "I demand that charges be pressed against all officers involved in this heinous racist murder, including specifically Derek Chauvin and Tou Thao. They should not be allowed to keep their jobs and should be charged and prosecuted to the fullest extent of the law for manslaughter.%0D%0A%0D%0A\n" +
        "\n" +
        "George Floyd should be alive today if it was not for the gross abuse of power and white supremacy exhibited by the Minneapolis Police Department, all officers involved must face consequences for this murder in order to provide his family with justice and prevent further cops from committing brutal acts of violence against our communities.%0D%0A%0D%0A\n" +
        "\n" +
        "In addition, I demand that we start providing more support towards community efforts and organizations outside of the police forces in order to prevent police brutality and violence in the future. %0D%0A%0D%0A\n" +
        "\n" +
        "Sincerely, \n%0D%0A" +
        "\n" +firstName+" "+lastName);
  }

  function mailTo2(e) {
    e.preventDefault();
    window.open ("mailto:Greg.Fischer@louisvilleky.gov?subject=Justice for Breanna Taylor&body=To whom it may concern,%0D%0A%0D%0A" +
        "\n" +
        "My name is "+firstName+" "+lastName+". I am from "+location+".\n%0D%0A%0D%0A" +
        "\n" +
        "I demand justice and accountability for the death of Breanna Taylor and I demand the charges be dropped against Kenneth Walker.\n%0D%0A%0D%0A" +
        "\n" +
        "I demand charges be brought against the officers involved in the shooting. They should receive the full consequences for their heinous actions.\n%0D%0A%0D%0A" +
        "\n" +
        "This pattern of police brutality and the unjust loss of black life in this country will continue if serious action is not taken. I urge you to do the right thing and drop charges against Kenneth Walker, a man simply trying to defend himself, and bring charges against the officers who took Breanna Taylor's life.\n%0D%0A%0D%0A" +
        "\n" +
        "Sincerely, %0D%0A"+
        firstName+" "+lastName);
  }
  function mailTo1(e) {
    e.preventDefault();
    window.open ("mailto:Greg.Fischer@louisvilleky.gov?subject=Justice for David McAtee&body=To Whom it may Concern,%0D%0A%0D%0A\n" +
        "\n" +
        "My name is "+firstName+" "+lastName+", and I am from "+location+". I am emailing you to demand accountability for the recent and racially charged murder of David McAtee. %0D%0A%0D%0A\n" +
        "\n" +
        "I demand that charges be pressed against all officers involved in this heinous crime, including but not limited to Austin Allen and Katie Crews. At the very least, these officers should be fired immediately.%0D%0A%0D%0A\n" +
        "\n" +
        "These officers’ blatant misuse of violence and failure to activate their body cameras demonstrates the corruption and racism that runs rampant in police departments across America.%0D%0A%0D%0A\n" +
        "\n" +
        "Change must be made, and I urge you to be on the right side of history.%0D%0A%0D%0A\n" +
        "Thank you,%0D%0A\n" +
        "\n" +
        firstName+" "+lastName);
  }
}

export default App;