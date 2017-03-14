#pragma once

#include "hello_world.hpp"

namespace djinnius {

    class HelloWorldImpl : public djinnius::HelloWorld {

    public:

        // Constructor
        HelloWorldImpl();

        // Our method that returns a string
        std::string get_hello_world();

    };

}
