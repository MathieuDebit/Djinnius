//
//  main.cpp
//  Djinnius-cpp
//
//  Created by Mathieu Débit on 14/03/2017.
//  Copyright © 2017 Mathieu Débit. All rights reserved.
//

#include <iostream>
#include "hello_world_impl.hpp"

int main(int argc, const char * argv[]) {
    
    djinnius::HelloWorldImpl hw = djinnius::HelloWorldImpl();
    
    std::string myString = hw.get_hello_world();
    
    std::cout << myString << "\n";
    
    return 0;
}
