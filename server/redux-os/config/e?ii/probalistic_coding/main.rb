# typed: false
module VariableThinking
  Object.include(self)
  
  def ƒ()
  end
  
  def ƒ∆t() # variablle over time
  end
  
  def ∫()
  end
  
  def	🍂 # maybe  useful
  end
  
  
  def sometimes(logic = "this fails")
    yield
  end
  
  def maybe(*args)
    yield
  end
  
  def most_probably(*args)
    yield
  rescue Exception => e
    Crypta.log(e.inspect)
  end
  
  
  most_probably("this fails") do
  sometimes("this fails") do
  ƒ("System", "Is Abastract") # hmmmm
  
  
  ƒ∆t()
  
  ∫()
  end
  end
end