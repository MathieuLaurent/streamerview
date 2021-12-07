<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class BlogController extends AbstractController
{
    /**
     * @route("/", name="home")
     */

    public function home(){
        return $this->render('site/home.html.twig');
    }

    /**
     * @route("/streamerview", name="streamerview")
     */

    public function streamerview(){
        return $this->render('site/streamerview.html.twig');
    }

     /**
      * @route("/profil", name="profil")
      */

    public function profil(){
        return $this->render('site/profil.html.twig');
    }
}
